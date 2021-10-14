import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import colors from "./config/colors";
import { AntDesign } from "@expo/vector-icons";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
const CreditsNoLogs = ({ navigation }) => {
  let [fontLoaded, error] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
  });
  if (!fontLoaded) {
    return <AppLoading />;
  }
  const URL1 = "https://www.fondazionetim.it/";
  const URL2 = "https://www.associazioneasta.com/";
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleCardContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.navigate("InfoNoLogs");
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
        <View style={styles.bodyContainer}>
          <Text style={styles.titleText}>questa app è stata realizzata</Text>
          <Text style={styles.titleText}>dall'Associazione A.S.T.A. Odv</Text>
          <Image source={require("../assets/ASTA.png")} style={styles.asta} />
          <Text style={styles.tel}>Tel: 06.450.61.62</Text>
          <Text style={styles.mail}>asta@associazioneasta.com</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(URL2);
            }}
          >
            <Text style={styles.web}>www.associazioneasta.com</Text>
          </TouchableOpacity>
          <Text style={styles.timText}>Con il contributo di</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(URL1);
            }}
          >
            <Image
              source={require("../assets/FTIM.png")}
              style={styles.timImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("Welcome");
            }}
          >
            <Text style={styles.btnText}>torna alla pagina iniziale</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreditsNoLogs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    height: 120,
    width: 220,
    resizeMode: "contain",
    marginLeft: 60,
    marginTop: 30,
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
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: { fontFamily: "Montserrat_700Bold", marginTop: 10 },
  asta: {
    height: 200,
    width: 300,
    resizeMode: "contain",
    marginVertical: 10,
  },
  tel: { fontFamily: "Montserrat_500Medium" },
  mail: { fontFamily: "Montserrat_500Medium" },
  web: { fontFamily: "Montserrat_700Bold" },
  timText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 20,
    marginTop: 30,
  },
  timImage: {
    height: 200,
    width: 270,
    resizeMode: "contain",
    marginVertical: 10,
  },
  btn: {
    flex: 1,
    width: "90%",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#484848",
  },
  btnText: {
    fontFamily: "Montserrat_700Bold",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 23,
    color: "white",
    padding: 3,
  },
});
