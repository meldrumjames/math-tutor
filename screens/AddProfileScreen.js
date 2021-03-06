import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import DefaultText from "../components/text/DefaultText";

const AddProfileScreen = (props) => {
  return (
    <View>
      <View>
        <View style={{ flexDirection: "row" }}>
          <DefaultText>Name: </DefaultText>
          <TextInput placeholder="enter name here"></TextInput>
        </View>
        <View>
          <DefaultText>Age: </DefaultText>
        </View>
        <View>
          <DefaultText>Favourite Color: </DefaultText>
        </View>
      </View>
    </View>
  );
};

const stlyes = StyleSheet.create({});

export default AddProfileScreen;
