import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";

// authenticatore
const LoginCard = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)

      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user) {
        navigation.replace("Landing");
      } else {
        // No user is signed in.
      }
    });
    return unsubscribe;
  });
  return (
    <View style={styles.container}>
      <Input
        placeholder="enter your email"
        label="email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Input
        placeholder="enter your password"
        label="password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button
        title="sign in"
        style={styles.button}
        containerStyle={{ width: 200, marginTop: 10 }}
        onPress={signIn}
      />
      <Button
        title="register"
        style={styles.button}
        containerStyle={{ width: 200, marginTop: 10 }}
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
};

export default LoginCard;

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10,
    backgroundColor: "#333",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});
