import React, { useState } from "react";
import { View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import styles from "./style";

export default function Login() {
  const [cnpj, setCnpj] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <KeyboardAwareScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Image
          style={styles.imageContainer}
          source={require("../../../assets/LOGO_AQUA.png")}
        />
        <TextInput
          placeholder="CNPJ"
          mask="cnpj"
          style={{ marginTop: 30 }}
          value={cnpj}
          onChangeText={setCnpj}
        />
        <TextInput
          placeholder="Login"
          style={{ marginTop: 20 }}
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          placeholder="Senha"
          style={{ marginTop: 20 }}
          value={password}
          onChangeText={setPassword}
          password={true}
        />
        <Button style={{ marginTop: 30 }} />
      </KeyboardAwareScrollView>
    </View>
  );
}
