import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

export default function Component({ style }) {
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]}>
      <Text style={styles.text}>Entrar</Text>
    </TouchableOpacity>
  );
}
