import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { USERS } from "../data/dummy-data";
import ProfileCard from "../components/ProfileCard";
import AddProfileButton from "../components/AddProfileButton";
import AddProfileScreen from "./AddProfileScreen";

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

ProfileSelectionScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AddProfileButton}>
        <Item
          title="Add Profile"
          iconName="add-circle-outline"
          onPress={() => {
            navigation.navigate({ routeName: "AddProfile" });
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ProfileSelectionScreen;
