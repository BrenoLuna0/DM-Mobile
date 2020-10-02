import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./style";

export default function Component({ style }) {
  return (
    <TouchableOpacity style={[styles.itemContainer, style]}></TouchableOpacity>
  );
}
