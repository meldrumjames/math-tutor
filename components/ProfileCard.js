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

const ProfileCard = (props) => {
  return (
    <View style={styles.gridItem}>
      <TouchComp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.titleText}>{props.name}</Text>
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
  },
  container: {
    flex: 1,
    margin: 15,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
  },
});

export default ProfileCard;
