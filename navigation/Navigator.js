import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoryScreen from "../screens/CategoryScreen";
import ProfileSelectionScreen from "../screens/ProfileSelectionScreen";
import EquationScreen from "../screens/EquationScreen";
import PassScreen from "../screens/PassScreen";
import FailScreen from "../screens/FailScreen";
import AddProfileScreen from "../screens/AddProfileScreen";

import TestingScreen from "../screens/TestingScreen";

const MainNavigator = createStackNavigator({
  Profiles: {
    screen: ProfileSelectionScreen,
  },
  Categories: {
    screen: CategoryScreen,
  },
  Equation: {
    screen: EquationScreen,
  },
  Pass: {
    screen: PassScreen,
  },
  Fail: {
    screen: FailScreen,
  },
  AddProfile: {
    screen: AddProfileScreen,
  },
});

// const TestNav = createStackNavigator({
//   TestEnv: {
//     screen: TestingScreen,
//   },
// });

export default createAppContainer(MainNavigator);
