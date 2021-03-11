import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";

import MainNavigator from "./navigation/Navigator";
import TestNav from "./navigation/Navigator";
import equationReducer from "./store/reducers/equationReducer";

enableScreens();

const rootReducer = combineReducers({
  equations: equationReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "droid-sans": require("./assets/fonts/DroidSans.ttf"),
    "droid-sans-bold": require("./assets/fonts/DroidSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
