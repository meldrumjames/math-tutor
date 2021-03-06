import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
} from "react-native";

import TitleText from "../components/text/TitleText";

let TouchComp = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version >= 21) {
  TouchComp = TouchableNativeFeedback;
}

const ChallengeButton = (props) => {
  return (
    <View style={styles.button}>
      <TouchComp style={{ flex: 1 }} onPress={props.onSelect}>
        <View>
          <TitleText style={styles.text}>{props.children}</TitleText>
        </View>
      </TouchComp>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get("window").width * 0.9,
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    fontSize: 40,
  },
});

export default ChallengeButton;
