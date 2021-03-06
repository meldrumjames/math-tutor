import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = (props) => (
  <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: "droid-sans",
  },
});

export default DefaultText;
