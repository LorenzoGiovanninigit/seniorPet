import React, { useState } from "react";
import { Input } from "react-native-elements";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
  TextInput,
  Switch,
  ScrollView,
} from "react-native";

import colors from "../Screens/config/colors";
import SelectDropdown from "react-native-select-dropdown";
import { Button } from "react-native-elements/dist/buttons/Button";
import Icon from "react-native-vector-icons/FontAwesome";
import firebase from "firebase";
import { db } from "../firebase";
import * as ImagePicker from "expo-image-picker";
import uuid from "uuid";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { AntDesign } from "@expo/vector-icons";

const AnimalRegister = ({ route, navigation }) => {
  const [status, setStatus] = [""];
  const size = ["Piccola", "Media", "Grande"];
  const sex = ["Maschio", "Femmina"];
  const ageList = [
    ">1",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "<20",
  ];
  let [fontLoaded, error] = useFonts({
    Montserrat_500Medium,
  });

  if (Platform.OS !== "web") {
    ImagePicker.requestMediaLibraryPermissionsAsync().then(() => {
      setStatus("granted");
    });
    //   .catch(() => {
    //     console.log("no granted media permission");
    //     Alert.alert("l'app non ha accesso alla camera");
    //   });
    // if (status !== "granted") {
    //   alert("ci dispiace, l'app non ha accesso alla camera");
    // }
  }

  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petRace, setPetRace] = useState("");
  const [petSex, setPetSex] = useState("");
  const [petSize, setPetSize] = useState("");
  const [petWeigth, setPetWeigth] = useState("");
  const [petChip, setPetChip] = useState("");
  const [image, setImage] = useState(null);
  const [isDog, setIsDog] = useState(false);
  const [isCat, setIsCat] = useState(false);

  const { uId } = route.params;
  const toggle = function () {
    if (isDog) {
      setIsDog(false);
    } else {
      setIsDog(true);
      setIsCat(false);
    }
  };
  const toggle2 = function () {
    if (isCat) {
      setIsCat(false);
    } else {
      setIsCat(true);
      setIsDog(false);
    }
  };

  const savePet = async () => {
    if (image) {
      uploadImage(image, uuid.v4())
        .then((res) => {
          console.log("image upload ok +++", res);
          Alert.alert("Immagine caricata");
        })
        .catch((error) => {
          console.log("image upload error +++", error);
          Alert.alert(error);
        });
    } else {
      console.log("Select Animal Image, please +++");
      Alert.alert("Seleziona immagine");
      return false;
    }
  };

  const openImagePickerAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("ImagePicker result +++", result);

    if (!result.cancelled) {
      setImage(result.uri);
    } else {
      setImage(null);
    }
  };

  const uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase
      .storage()
      .ref()
      .child("images/" + imageName);
    const snapshot = await ref.put(blob);
    const imageUrl = await snapshot.ref.getDownloadURL();
    db.collection("pets")
      .add({
        uid: JSON.stringify(uId),
        petName,
        petAge,
        petRace,
        petSex,
        petSize,
        petWeigth,
        petChip,
        imageUrl,
        created: firebase.firestore.Timestamp.fromDate(new Date()),
      })
      .then((docRef) => {
        Alert.alert("Animale Aggiunto");
        console.log("pet add ok +++", docRef.id);
        navigation.navigate("myAnimals", { uId });
      })
      .catch((error) => {
        console.log("Errore, Animale non aggiunto", error);
        Alert.alert(error);
      });
    return imageUrl;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.navigate("myAnimals");
            }}
          >
            <AntDesign name="left" size={24} color="white" />
          </TouchableOpacity>
          <Image
            style={styles.imageLogo}
            source={require("../assets/titleLogo.png")}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Info");
            }}
            style={styles.textInfoContainer}
          >
            <Image
              source={require("../assets/info-01.png")}
              style={styles.infoText}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.p}>
            {" "}
            Grazie{" "}
            {/* <Text
            style={{
              color: colors.primary,
              fontFamily: "Montserrat_500Medium",
            }}
          >
            Lorenzo{" "}
          </Text> */}
            per la tua registrazione {"\n"} ora inserisci i dati del tuo animale
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.imageContainer} onPress={toggle}>
            <Image
              source={require("../assets/cane.png")}
              onPress={toggle}
              style={isDog ? styles.pressed : styles.image}
            />
            <Text
              onPress={toggle}
              style={{ fontFamily: "Montserrat_500Medium" }}
              style={{ color: isDog ? colors.primary : "grey" }}
            >
              Ho un cane
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageContainer} onPress={toggle2}>
            <Image
              onPress={toggle2}
              source={require("../assets/gatto.png")}
              style={isCat ? styles.pressed : styles.image}
            />
            <Text
              onPress={toggle2}
              style={{ fontFamily: "Montserrat_500Medium" }}
              style={{ color: isCat ? colors.primary : "grey" }}
            >
              Ho un gatto
            </Text>
          </TouchableOpacity>
        </View>

        <TextInput
          value={petName}
          placeholder="Nome"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={(petName) => setPetName(petName)}
        />
        {/* <TextInput
          value={petAge}
          placeholder="Età"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={(petAge) => setPetAge(petAge)}
        /> */}
        <SelectDropdown
          data={ageList}
          defaultButtonText={"Età"}
          buttonStyle={{
            width: "90%",
            height: 40,

            borderBottomColor: "grey",
            borderBottomWidth: 1,
            alignItems: "center",
            marginBottom: 10,
          }}
          buttonTextStyle={{
            color: "grey",
            fontFamily: "Montserrat_500Medium",
            fontSize: 16,
            textAlign: "left",
          }}
          onSelect={(item, index) => {
            setPetAge(item);
          }}
        />
        <TextInput
          value={petRace}
          placeholder="Razza"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={(petRace) => setPetRace(petRace)}
        />
        <SelectDropdown
          data={sex}
          defaultButtonText={"Sesso"}
          buttonStyle={{
            width: "90%",
            height: 40,
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            alignItems: "center",
            marginBottom: 10,
          }}
          buttonTextStyle={{
            color: "grey",
            fontFamily: "Montserrat_500Medium",
            fontSize: 16,
            textAlign: "left",
          }}
          onSelect={(item, index) => {
            setPetSex(item);
          }}
        />
        {/* <TextInput
          value={petSex}
          placeholder="Sesso"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={(petSex) => setPetSex(petSex)}
        /> */}

        <SelectDropdown
          data={size}
          defaultButtonText={"Taglia"}
          buttonStyle={{
            width: "90%",
            height: 40,

            borderBottomColor: "grey",
            borderBottomWidth: 1,

            marginBottom: 10,
          }}
          buttonTextStyle={{
            color: "grey",
            fontFamily: "Montserrat_500Medium",
            fontSize: 16,
            textAlign: "left",
          }}
          onSelect={(item, index) => {
            setPetSize(item);
          }}
        />

        {/* <TextInput
          value={petSize}
          placeholder="Taglia"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={(petSize) => setPetSize(petSize)}
        /> */}
        <TextInput
          value={petWeigth}
          placeholder="Peso"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={(petWeigth) => setPetWeigth(petWeigth)}
        />
        <TextInput
          value={petChip}
          placeholder="Chip"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={(petChip) => setPetChip(petChip)}
        />
        <Button
          titleStyle={{ fontFamily: "Montserrat_500Medium" }}
          icon={<Icon name="photo" size={15} color="white" />}
          buttonStyle={styles.buttonStyle}
          title="Scatta foto animale"
          containerStyle={{ width: 300, marginTop: 10 }}
          onPress={openImagePickerAsync}
        />
        <Button
          titleStyle={{ fontFamily: "Montserrat_500Medium" }}
          icon={<Icon name="check" size={15} color="white" />}
          buttonStyle={styles.buttonStyle}
          title="Salva e procedi"
          containerStyle={{ width: 300, marginTop: 10 }}
          onPress={() => savePet()}
        />
        <Button
          titleStyle={{ fontFamily: "Montserrat_500Medium" }}
          icon={<Icon name="plus" size={15} color="white" />}
          buttonStyle={{
            backgroundColor: "#484848",
            width: 300,
            height: 40,
            marginTop: 10,

            letterSpacing: 2,
          }}
          title="Aggiungi animale"
          containerStyle={{ width: 300, marginTop: 10 }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  backButton: {
    marginTop: 80,
    marginLeft: 10,
  },
  titleContainer: {
    flexDirection: "row",
    width: "100%",
    height: 130,
    justifyContent: "space-between",

    backgroundColor: colors.primary,
  },
  imageLogo: {
    marginTop: 30,
    height: 120,
    width: 220,
    resizeMode: "contain",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  containerInput: {
    height: 10,
    margin: 13,
    fontFamily: "Montserrat_500Medium",
  },

  p: {
    fontSize: 15,
    lineHeight: 40,
    fontFamily: "Montserrat_500Medium",
  },
  imageContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  pressed: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  buttonStyle: {
    width: 300,
    height: 40,
    marginTop: 10,
    backgroundColor: colors.primary,
    letterSpacing: 2,
  },
  inputFields: {
    alignItems: "flex-start",

    width: "100%",
    marginLeft: 40,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "grey",
    height: 40,

    marginBottom: 10,
    width: "90%",
    fontFamily: "Montserrat_500Medium",
  },
  infoText: {
    marginRight: 5,
    height: 40,
    width: 50,
    resizeMode: "contain",
  },
  textInfoContainer: {
    marginTop: 70,
    marginRight: 5,
  },
});

export default AnimalRegister;
