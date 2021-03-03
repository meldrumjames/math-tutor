import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { USERS } from "../data/dummy-data";
import ProfileCard from "../components/ProfileCard";

const ProfileSelectionScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <ProfileCard
        name={itemData.item.name}
        color={itemData.item.favColor}
        onSelect={() => {
          props.navigation.navigate({ routeName: "Categories" });
        }}
      />
    );
  };

  return <FlatList data={USERS} renderItem={renderGridItem} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileSelectionScreen;
