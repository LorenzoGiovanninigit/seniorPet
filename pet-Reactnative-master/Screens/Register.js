import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { auth, generateUserDocument } from "../firebase";
import colors from "../Screens/config/colors";
import { FontAwesome } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { AntDesign } from "@expo/vector-icons";
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cell, setCell] = useState("");
  const [telephone, setTelPhone] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState(
    "https://i.pinimg.com/originals/7a/fe/66/7afe66fe7c271112c9ba0ceecc60ec99.png"
  );

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const displayName = name + " " + surname;
        generateUserDocument(
          user,
          displayName,
          cell,
          telephone,
          address,
          age,
          photoURL
        );
        navigation.navigate("Welcome");
      })
      .catch((error) => {
        alert("user register error: " + error);
      });
  };

  let [fontLoaded, error] = useFonts({
    Montserrat_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleCardContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.navigate("Welcome");
            }}
          >
            <AntDesign name="left" size={24} color="white" />
          </TouchableOpacity>
          <Image
            source={require("../assets/titleLogo.png")}
            style={styles.titleCard}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("InfoNoLogs");
            }}
            style={styles.textInfoContainer}
          >
            <Image
              source={require("../assets/info-01.png")}
              style={styles.infoText}
            />
          </TouchableOpacity>
        </View>
        <Input
          placeholder="Nome"
          label=""
          value={name}
          onChangeText={(text) => setName(text)}
          containerStyle={styles.containerInput}
        />
        <Input
          placeholder="Cognome"
          label=""
          value={surname}
          onChangeText={(text) => setSurname(text)}
          containerStyle={styles.containerInput}
        />
        <Input
          placeholder="Cell"
          label=""
          value={cell}
          onChangeText={(text) => setCell(text)}
          containerStyle={styles.containerInput}
        />
        <Input
          placeholder="Telefono"
          label=""
          value={telephone}
          onChangeText={(text) => setTelPhone(text)}
          containerStyle={styles.containerInput}
        />
        <Input
          placeholder="Indirizzo"
          label=""
          value={address}
          onChangeText={(text) => setAddress(text)}
          containerStyle={styles.containerInput}
        />
        <Input
          placeholder="età"
          label=""
          value={age}
          onChangeText={(text) => setAge(text)}
          containerStyle={styles.containerInput}
        />
        <Input
          placeholder="Email"
          label=""
          containerStyle={styles.containerInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="Password"
          label=""
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          containerStyle={styles.containerInput}
        />

        <TextInput
          style={styles.input}
          containerStyle={styles.containerInput}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            register();
          }}
        >
          <Text style={styles.btnText}>Salva e procedi</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
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
  button: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    width: "90%",
    height: 60,
    marginVertical: 10,
  },
  btnText: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
    color: "white",
    textAlignVertical: "center",
    textAlign: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerInput: {
    height: 10,
    margin: 13,
  },
  imageContainer: {
    width: "100%",
    height: 130,
    alignItems: "center",
    backgroundColor: colors.primary,
    margin: 0,
  },
  image: {
    height: 100,
    width: 220,
    resizeMode: "contain",
    marginTop: 40,
  },
  titleCardContainer: {
    flexDirection: "row",
    width: "100%",
    height: 130,
    justifyContent: "space-between",

    backgroundColor: colors.primary,
  },
  backButton: {
    marginTop: 80,
    marginLeft: 10,
  },
  titleCard: {
    marginTop: 30,
    height: 120,
    width: 220,
    resizeMode: "contain",
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
