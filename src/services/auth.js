import { AsyncStorage } from "react-native";

export const onSignIn = async (cnpj, login, password) => {
  if (
    cnpj === "00.000.000/0000-00" &&
    login == "teste" &&
    password === "1234"
  ) {
    await AsyncStorage.setItem("token", "LALALAY");
    return true;
  }

  return false;
};

export const onSignOut = async () => {
  await AsyncStorage.removeItem("token");
};

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem("token");
  return token !== null ? true : false;
};
