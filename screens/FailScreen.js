import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import MainButton from "../components/MainButton";

const FailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Oh no!</Text>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://cdn.pixabay.com/photo/2017/01/31/22/15/icon-2027661_960_720.png",
        }}
      />
      <MainButton style={styles.button}>Try again</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginVertical: 20,
    fontSize: 40,
  },
  image: {
    width: "80%",
    height: "60%",
  },
});

FailScreen.navigationOptions = {
  headerLeft: () => {
    return null;
  },
};

export default FailScreen;
