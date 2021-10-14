import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import colors from "./config/colors";
import AppLoading from "expo-app-loading";
const error = ({ navigation }) => {
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
        <Image source={require("../assets/errore.png")} style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textOrange}>Ops, Sembra che</Text>
        <Text style={styles.textOrange}>qualcosa sia andato storto</Text>
        <Text style={styles.text}>verifica che la connessione</Text>
        <Text style={styles.text}>del cellulare alla rete</Text>
        <Text style={styles.text}>telefonica o alla </Text>
        <Text style={styles.text}>rete internet e riprova</Text>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text
          style={styles.btnText}
          onPress={navigation.navigate("helpRequest")}
        >
          Richiedi di nuovo assistenza{" "}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnGrey}
        onPress={() => {
          navigation.navigate("myAnimals");
        }}
      >
        <Text style={styles.btnText}>Torna all'elenco animali</Text>
      </TouchableOpacity>
    </View>
  );
};

export default error;

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
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 25,
  },
  textOrange: {
    fontSize: 25,
    color: colors.primary,
    fontFamily: "Montserrat_700Bold",
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
  btnGrey: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#484848",
    width: "90%",
    height: 60,
    marginTop: 30,
    fontSize: 30,
  },
  btnText: {
    color: "white",
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
  },
});
