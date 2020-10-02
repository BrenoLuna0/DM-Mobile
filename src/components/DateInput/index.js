import React from "react";
import {} from "react-native";
import styles from "./style";

export default function Component({
  placeholder,
  mask,
  style,
  value,
  onChangeText,
}) {
  return (
    <TextInputMask
      style={[styles.textInputContainer, style]}
      type={mask}
      value={value}
      onChangeText={(text) => {
        onChangeText(text);
      }}
      placeholder={placeholder}
    />
  );
}
