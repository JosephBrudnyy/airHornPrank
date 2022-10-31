import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MenuSounds from "../screens/MenuSounds/MenuSounds";

const AppNavigator = createStackNavigator({
  menuSoundsScreen: {
    screen: MenuSounds
  }
});

export default createAppContainer(AppNavigator);