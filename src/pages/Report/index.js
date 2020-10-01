import React from "react";
import {
  View,
  StatusBar,
  Dimensions,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";
import ScrollableTabView from "react-native-scrollable-tab-view";
import { LineChart } from "react-native-chart-kit";
import { data } from "../../../data";
//import 'babel-polyfill'

// in Expo - swipe left to see the following styling, or create your own
const chartConfig = {
  backgroundColor: "#0D0D0D",
  backgroundGradientFrom: "#0D0D0D",
  backgroundGradientTo: "#0D0D0D",
  color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`,
};

export default function Report() {
  const renderTabBar = () => {
    return <StatusBar hidden />;
  };

  const width = Dimensions.get("window").width;
  const height = 220;
  const labelStyle = {
    color: chartConfig.color(),
    marginVertical: 10,
    textAlign: "center",
    fontSize: 16,
  };
  const graphStyle = {
    marginVertical: 8,
    ...chartConfig.style,
  };

  const state = {
    tableHead: ["", "Vendas P1", "Vendas P2", "Vendas p3"],
  };

  const tableData = [];
  for (let i = 0; i < 6; i += 1) {
    const rowData = [];
    for (let j = 0; j < 3; j += 1) {
      rowData.push(`${i}${j}`);
    }
    tableData.push(rowData);
  }

  return (
    <ScrollableTabView renderTabBar={renderTabBar}>
      <View
        key={Math.random()}
        style={{
          backgroundColor: chartConfig.backgroundColor,
          flex: 1,
        }}
      >
        <Text style={labelStyle}>Bezier Line Chart</Text>
        <LineChart
          data={data}
          width={width}
          height={height}
          chartConfig={chartConfig}
          bezier
          style={graphStyle}
        />
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
            <Row
              data={state.tableHead}
              flexArr={[1, 1, 1, 1]}
              style={styles.header}
              textStyle={styles.text}
            />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderWidth: 1 }}>
              <TableWrapper style={styles.wrapper}>
                <Col
                  data={data.labels}
                  style={styles.title}
                  textStyle={styles.text}
                />
                <Rows
                  data={tableData}
                  flexArr={[1, 1, 1]}
                  style={styles.row}
                  textStyle={styles.text}
                />
              </TableWrapper>
            </Table>
          </ScrollView>
        </View>
      </View>
    </ScrollableTabView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  header: { height: 50, backgroundColor: "#537791" },
  text: { textAlign: "center", fontWeight: "100" },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: "#E7E6E1" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#f6f8fa" },
});
