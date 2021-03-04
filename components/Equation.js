import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const Equation = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
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
