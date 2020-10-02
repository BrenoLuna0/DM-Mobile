import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

export default function Component({ style, onPress }) {
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text style={styles.text}>Entrar</Text>
    </TouchableOpacity>
  );
}
