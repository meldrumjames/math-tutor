import React from "react";
import { TextInput, StyleSheet, Dimensions } from "react-native";

const InputArea = (props) => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.inputContainer, ...props.style }}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: Dimensions.get("screen").height * 0.5,
  },
});

export default InputArea;
