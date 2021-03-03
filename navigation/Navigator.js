import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoryScreen from "../screens/CategoryScreen";
import ProfileSelectionScreen from "../screens/ProfileSelectionScreen";
import EquationScreen from "../screens/EquationScreen";
import ResultScreen from "../screens/ResultScreen";

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
  Result: {
    screen: ResultScreen,
  },
});

export default createAppContainer(MainNavigator);
