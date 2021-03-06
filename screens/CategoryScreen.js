import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import CategoryCard from "../components/CategoryCard";
import ChallengeButton from "../components/ChallengeButton";

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
            operation="x"
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
            operation="÷"
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
      <View>
        <ChallengeButton>CHALLENGE</ChallengeButton>
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
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  challengeCard: {
    height: Dimensions.get("screen").height * 0.2,
    width: 500,
  },
});

CategoryScreen.navigationOptions = {
  headerLeft: () => {
    return null;
  },
};

export default CategoryScreen;
