import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constant/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const OutlinedButton = ({ icon, onPress, children }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons
        style={styles.icon}
        name={icon}
        size={18}
        color={Colors.primary500}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    borderWith: 2,
    // borderColor: "white",
    borderColor: Colors.primary500,
  },

  pressed: {
    opacity: 0.7,
  },

  icon: {
    marginRight: 6,
  },

  text: {
    color: Colors.primary500,
  },
});
