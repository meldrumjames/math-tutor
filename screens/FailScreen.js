import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FailScreen = (props) => {
  const outcomeResult = props.navigation.getParam("outcome");

  return <View style={styles.screen}></View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FailScreen;
