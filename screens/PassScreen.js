import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import MainButton from "../components/MainButton";

const PassScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Well done!</Text>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://cdn.pixabay.com/photo/2012/11/25/06/35/samuel-67197_960_720.jpg",
        }}
      />
      <MainButton
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("Equation");
        }}
      >
        Try again
      </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
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

PassScreen.navigationOptions = {
  headerLeft: () => {
    return null;
  },
};

export default PassScreen;
