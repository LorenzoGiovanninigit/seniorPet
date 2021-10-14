import React from "react";
import { Text } from "react-native";

import { TouchableOpacity, StyleSheet } from "react-native";
import colors from "./colors";

function AppButton({ title, onPress, color }) {
  return (
    <TouchableOpacity
      style={[styles.AppButton, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  AppButton: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginBottom: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
  },
});
