import React from "react";
import { TextInput, Platform } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import styles from "./style";

export default function Component({
  placeholder,
  mask,
  style,
  value,
  onChangeText,
  password,
}) {
  return mask ? (
    <TextInputMask
      style={[styles.textInputContainer, style]}
      type={mask}
      value={value}
      onChangeText={(text) => {
        onChangeText(text);
      }}
      placeholder={placeholder}
    />
  ) : password ? (
    <TextInput
      style={[styles.textInputContainer, style]}
      placeholder={placeholder}
      secureTextEntry={true}
      value={value}
      onChangeText={(text) => {
        onChangeText(text);
      }}
    />
  ) : (
    <TextInput
      style={[styles.textInputContainer, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => {
        onChangeText(text);
      }}
    />
  );
}
