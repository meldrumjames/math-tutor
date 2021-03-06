import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import MainNavigator from "./navigation/Navigator";
import TestNav from "./navigation/Navigator";

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

  return <MainNavigator />;
}
