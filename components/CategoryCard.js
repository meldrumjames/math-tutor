import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

let TouchComp = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version >= 21) {
  TouchComp = TouchableNativeFeedback;
}

const CategoryCard = (props) => {
  return (
    <View style={styles.gridItem}>
      <TouchComp style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={styles.container}>
          <Text style={styles.text}>{props.operation}</Text>
        </View>
      </TouchComp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 1,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default CategoryCard;
