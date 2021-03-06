import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
} from "react-native";

import TitleText from "./text/TitleText";

let TouchComp = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version >= 21) {
  TouchComp = TouchableNativeFeedback;
}

const CategoryCard = (props) => {
  return (
    <View style={{ ...styles.gridContainer, ...props.style }}>
      <View style={styles.gridItem}>
        <TouchComp style={{ flex: 1 }} onPress={props.onSelect}>
          <View style={styles.container}>
            <TitleText style={styles.text}>{props.operation}</TitleText>
          </View>
        </TouchComp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    width: (Dimensions.get("window").width * 0.9) / 2,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 1,
    margin: 15,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
  },
});

export default CategoryCard;
