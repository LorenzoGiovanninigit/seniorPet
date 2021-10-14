import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import colors from "./config/colors";
import AppLoading from "expo-app-loading";

const helpRequest = ({ navigation }) => {
  let [fontLoaded, error] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
  });
  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleCardContainer}>
        <Image
          source={require("../assets/titleLogo.png")}
          style={styles.titleCard}
        />
      </View>
      <View style={styles.imgContainer}>
        <Image source={require("../assets/cuore.png")} style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.p}>Grazie</Text>
        <Text style={styles.p}>per aver inviato</Text>
        <Text style={styles.p}>la tua richiesta</Text>
        <Text style={styles.textOrange}>sarai ricontattato</Text>
        <Text style={styles.p}>telefonicamente</Text>
        <Text style={styles.textOrange}>entro 24 ore</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("myAnimals");
        }}
      >
        <Text style={styles.btnText}>Torna all'elenco dei tuoi animali</Text>
      </TouchableOpacity>
    </View>
  );
};

export default helpRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  titleCardContainer: {
    width: "100%",
    height: 130,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  titleCard: {
    marginTop: 33,
    height: 120,
    width: 220,
    resizeMode: "contain",
  },
  imgContainer: {
    width: 100,
    height: 100,
    marginTop: 30,
  },
  img: {
    width: 80,
    height: 80,

    resizeMode: "contain",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  p: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 25,
  },
  textOrange: {
    color: colors.primary,
    fontFamily: "Montserrat_700Bold",
    fontSize: 25,
  },
  btn: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    width: "90%",
    height: 60,
    marginTop: 30,
  },
  btnText: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
  },
});
