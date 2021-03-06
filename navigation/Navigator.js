import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoryScreen from "../screens/CategoryScreen";
import ProfileSelectionScreen from "../screens/ProfileSelectionScreen";
import EquationScreen from "../screens/EquationScreen";
import PassScreen from "../screens/PassScreen";
import FailScreen from "../screens/FailScreen";

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
});

export default createAppContainer(MainNavigator);
