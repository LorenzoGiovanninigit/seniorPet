import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import colors from "./config/colors";
import { AntDesign } from "@expo/vector-icons";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
const InfoNoLogs = ({ navigation }) => {
  let [fontLoaded, error] = useFonts({
    Montserrat_500Medium,
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
        <View style={styles.textContainer}>
          <Text style={styles.warning}>
            l'accesso e uso di questa App è soggetto a:
          </Text>
          <TouchableOpacity
            style={styles.textContainer2}
            onPress={() => {
              navigation.navigate("CreditsNoLogs");
            }}
          >
            <Text style={styles.credits}>Credits</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textContainer2}
            onPress={() => {
              navigation.navigate("PrivacyNoLogs");
            }}
          >
            <Text style={styles.privacy}>Informativa sulla privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textContainer2}
            onPress={() => {
              navigation.navigate("RegolamentoNoLog");
            }}
          >
            <Text style={styles.credits}>Regolamento</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.version}>Versione 1.0</Text>
      </View>
    </ScrollView>
  );
};

export default InfoNoLogs;

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
  titleCard: {
    marginTop: 30,
    height: 120,
    width: 220,
    resizeMode: "contain",
  },
  textContainer: {
    width: "90%",
  },
  warning: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginVertical: 10,
  },
  credits: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  privacy: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  textContainer2: {
    height: 40,
  },
  version: {
    alignSelf: "center",
  },
});
