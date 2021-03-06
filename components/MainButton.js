import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import TitleText from "./text/TitleText";

const MainButton = (props) => {
  return (
    <View style={{ ...styles.button, ...props.style }}>
      <TouchableOpacity onPress={props.onPress}>
        <View>
          <TitleText style={styles.buttonText}>{props.children}</TitleText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
  },
});

export default MainButton;
