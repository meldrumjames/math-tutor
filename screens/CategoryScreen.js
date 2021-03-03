import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoryScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Category Screen</Text>
      <Button
        title="go to equation"
        onPress={() => {
          props.navigation.navigate({ routeName: "Equation" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryScreen;
