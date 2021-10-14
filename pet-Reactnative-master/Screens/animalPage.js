import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import db from "firebase";
import { firestore, deletePet } from "../firebase";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import colors from "./config/colors";
import AppLoading from "expo-app-loading";
import MailSender from "./MailSender";
import { AntDesign } from "@expo/vector-icons";

const animalPage = ({ route, navigation }) => {
  let [fontLoaded, error] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  const confirmDialog = () => {
    Alert.alert(
      "Sei sicuro?",
      "Stai per rimuovere permanentemente questo animale ",
      [
        {
          text: "Cancella",

          onPress: async () => {
            await deletePet(petData.id);
            navigation.navigate("myAnimals");
          },
        },
        {
          text: "Indietro",
        },
      ]
    );
  };

  const { pet } = route.params;
  console.log("Router Params", pet);
  const petData = JSON.parse(pet);
  console.log("pet data +++", petData);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleCardContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.navigate("myAnimals");
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
        <Text style={styles.title}>Scheda Animale</Text>
        {/* <View style={styles.imgRaceCont}>
        <Image
          source={require("../assets/gatto.png")}
          style={styles.imgRace}
        />
        <Text style={styles.raceText}>Gatto</Text>
      </View> */}
        {petData ? (
          <>
            <View style={styles.imgContainer}>
              <Image
                source={
                  { uri: petData.imageUrl } || require("../assets/batman.jpg")
                }
                style={styles.imgMain}
              />
            </View>
            <Text style={styles.textField}>
              Nome: <Text style={styles.textFilled}>{petData.petName}</Text>
            </Text>
            <Text style={styles.textField}>
              Età: <Text style={styles.textFilled}>{petData.petAge}</Text>
            </Text>
            <Text style={styles.textField}>
              Razza: <Text style={styles.textFilled}>{petData.petRace}</Text>
            </Text>
            <Text style={styles.textField}>
              Sesso: <Text style={styles.textFilled}>{petData.petSex}</Text>
            </Text>
            <Text style={styles.textField}>
              Taglia: <Text style={styles.textFilled}>{petData.petSize}</Text>
            </Text>
            <Text style={styles.textField}>
              Peso: <Text style={styles.textFilled}>{petData.petWeigth}</Text>
            </Text>
            <Text style={styles.textField}>
              Microchip:{" "}
              <Text style={styles.textFilled}>{petData.petChip}</Text>
            </Text>
          </>
        ) : (
          <Text style={styles.noDataText}></Text>
        )}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            MailSender(petData);

            navigation.navigate("helpRequest");
          }}
        >
          <Text style={styles.btnText}>
            Richiedi assistenza per {petData.petName}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addAnimal}
          onPress={() => {
            navigation.navigate("AnimalRegister", { uId: petData.uid });
          }}
        >
          <Text style={styles.addAnimalText}>+ Aggiungi animale</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addAnimal}
          // onPress={async () => {
          //   console.log("Pet Data", petData);

          //   await deletePet(petData.id);
          //   navigation.navigate("myAnimals");
          // }}
          onPress={() => {
            confirmDialog();
          }}
        >
          <Text style={styles.addAnimalText}>Cancella questo animale</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default animalPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 30,
    marginTop: 10,
    marginBottom: 50,
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
  imgContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imgMain: {
    // borderStyle: "solid",
    borderColor: colors.primary,
    borderWidth: 2,
    width: 130,
    height: 130,

    borderRadius: 130,
  },
  imgRace: {
    width: 50,
    height: 50,

    resizeMode: "center",
  },
  imgRaceCont: {
    height: 80,
    width: 80,
    borderStyle: "solid",
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  raceText: {
    color: colors.primary,
    fontFamily: "Montserrat_700Bold",
  },
  textField: {
    width: "90%",
    color: colors.primary,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    fontFamily: "Montserrat_500Medium",
    fontSize: 20,
  },
  textFilled: {
    color: "black",
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
  },
  btn: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    width: "90%",
    height: 60,
    marginVertical: 10,
  },
  btnText: {
    color: "white",
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
  },
  addAnimal: {
    marginTop: 20,
  },
  addAnimalText: {
    fontFamily: "Montserrat_500Medium",
    color: "#484848",
    fontSize: 20,
  },
  noDataText: {
    color: "black",
    fontSize: 30,
    fontFamily: "Montserrat_700Bold",
    marginTop: 20,
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
