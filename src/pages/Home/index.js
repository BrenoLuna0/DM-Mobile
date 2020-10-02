import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./style";
import TextInput from "../../components/TextInput";
import ReportItem from "../../components/ReportItem";

export default function Home() {
  return (
    <>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Pesquisar Relatório..."
          style={{ marginTop: 30 }}
        />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <ReportItem style={{ backgroundColor: "#008DD5" }} />
        <ReportItem style={{ backgroundColor: "#0184C7" }} />
        <ReportItem style={{ backgroundColor: "#0A6BB1" }} />
        <ReportItem style={{ backgroundColor: "#00499A" }} />
      </ScrollView>
    </>
  );
}
