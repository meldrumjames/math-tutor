import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const MainButton = (props) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={props.onPress}>
        <View>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 10,
    height: Dimensions.get("screen").height * 0.15,
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
