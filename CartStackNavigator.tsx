import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Profile";

const Stack = createStackNavigator();

const CartStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Cart" component={Profile} />
    </Stack.Navigator>
  );
};

export default CartStackNavigator;
