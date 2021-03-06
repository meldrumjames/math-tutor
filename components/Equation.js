import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import TitleText from "./text/TitleText";

const Equation = (props) => {
  return (
    <View style={styles.container}>
      <TitleText style={styles.text}>{props.children}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    height: Dimensions.get("screen").height * 0.15,
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default Equation;
