import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import CategoryCard from "../components/CategoryCard";

const CategoryScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.gridContainer}>
        <View style={styles.row}>
          <CategoryCard
            operation="+"
            onSelect={() => {
              props.navigation.navigate({
                routeName: "Equation",
                params: {
                  categoryID: "+",
                },
              });
            }}
          />
          <CategoryCard
            operation="-"
            onSelect={() => {
              props.navigation.navigate({
                routeName: "Equation",
                params: {
                  categoryID: "-",
                },
              });
            }}
          />
        </View>
        <View style={styles.row}>
          <CategoryCard
            operation="*"
            onSelect={() => {
              props.navigation.navigate({
                routeName: "Equation",
                params: {
                  categoryID: "x",
                },
              });
            }}
          />
          <CategoryCard
            operation="/"
            onSelect={() => {
              props.navigation.navigate({
                routeName: "Equation",
                params: {
                  categoryID: "÷",
                },
              });
            }}
          />
        </View>
      </View>
      <View style={styles.challengeContainer}>
        <CategoryCard
          operation="challenge"
          onSelect={() => {
            props.navigation.navigate({ routeName: "Equation" });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gridContainer: {
    height: Dimensions.get("screen").height * 0.6,
    // borderColor: "red",
    // borderWidth: 2,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  challengeContainer: {
    height: 100,
  },
});

CategoryScreen.navigationOptions = {
  headerLeft: () => {
    return null;
  },
};

export default CategoryScreen;
