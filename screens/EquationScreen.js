import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const EquationScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Equation Screen</Text>
      <Button
        title="go to result"
        onPress={() => {
          props.navigation.navigate({ routeName: "Result" });
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

export default EquationScreen;
