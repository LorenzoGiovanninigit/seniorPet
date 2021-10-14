import React, { useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { Button, Input } from "react-native-elements";

import colors from "./config/colors";
import { auth } from "../firebase";
import firebase from "firebase";
import { Platform } from "react-native";

function Welcome({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    // auth
    //   .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    //   .then(() => {
    //     auth.onAuthStateChanged((user) => {
    //       if (user) {
    //         auth
    //           .signInWithEmailAndPassword(email, password)
    //           .then((res) => {
    //             if (res.user) {
    //               navigation.navigate("myAnimals", { uId: res.user.uid });
    //             }
    //           })
    //           .catch((error) => {
    //             console.log("get user error +++", error);
    //             alert("login error: " + error.message);
    //           });
    //         console.log("user is logged");
    //       }
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    auth.onAuthStateChanged((user) => {
      if (user) {
        auth
          .signInWithEmailAndPassword(email, password)
          .then((res) => {
            if (res.user) {
              navigation.navigate("myAnimals", { uId: res.user.uid });
            }
          })
          .catch((error) => {
            console.log("get user error +++", error);
            alert("login error: " + error.message);
          });
        console.log("user is logged");
      }
    });
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) {
          navigation.navigate("myAnimals", { uId: res.user.uid });
        }
      })
      .catch((error) => {
        console.log("get user error +++", error);
        alert("login error: " + error.message);
      });
  };

  let [fontLoaded, error] = useFonts({
    Montserrat_700Bold,
    Montserrat_500Medium,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground
      blurRadius={2}
      source={require("../assets/back.png")}
      style={styles.back}
    >
      <View style={styles.logoContainer}>
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
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="black"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="black"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          buttonStyle={{ backgroundColor: colors.primary, width: 300 }}
          onPress={signIn}
          titleStyle={{
            fontSize: 20,
            color: "white",
            fontFamily: "Montserrat_700Bold",
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          titleStyle={{ fontSize: 20, fontFamily: "Montserrat_700Bold" }}
          title="Register"
          buttonStyle={{ backgroundColor: "#484848", width: 300 }}
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
      </View>
      {/* <Text style={{ color: "white", margin: 2, fontSize: 20 }}>O</Text> */}
      <View style={styles.buttonRow}>
        <Button
          titleStyle={{ fontFamily: "Montserrat_500Medium" }}
          buttonStyle={{
            backgroundColor: "#1DA1F2",
            marginRight: 12,
            width: 60,
            height: 40,
          }}
          title="T"
        />
        <Button
          titleStyle={{ fontFamily: "Montserrat_500Medium" }}
          buttonStyle={{
            backgroundColor: "#DB4437",
            width: 60,
            height: 40,
          }}
          title="G"
        />
        <Button
          titleStyle={{ fontFamily: "Montserrat_500Medium" }}
          buttonStyle={{
            backgroundColor: "#4267B2",
            marginLeft: 12,
            width: 60,
            height: 40,
          }}
          title="F"
        />
      </View>
    </ImageBackground>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  back: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 250,
    width: 250,
    resizeMode: "contain",
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 50,
  },

  input: {
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.white,

    color: "black",
    height: 40,
    marginBottom: 10,
    width: "100%",
    fontFamily: "Montserrat_500Medium",
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-around",
  },
  infoText: {
    marginRight: 5,
    height: 40,
    width: 50,
    resizeMode: "contain",
  },
  textInfoContainer: {
    marginTop: 20,
    marginRight: 5,
  },
});
