import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartStackNavigator from "./CartStackNavigator";
import { routes, screens } from "./Routes";
import HomeScreen from "../ProductHome";
import ProductDetails from "../ProductDetails";
import Logout from "../Logout";
import { View, StyleSheet, Text } from "react-native";

const Tab = createBottomTabNavigator();

const tabOptions = ({ route }) => {
  const item = routes.find(
    routeItem => routeItem.name === "CartStackNavigator"
  ); // get the route config object

  if (!item.showInTab) {
    // hide this tab
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,
      headerShown: false,
      tabBarStyle: styles.tabContainer,
      title: item.title
    };
  }

  return {
    tabBarIcon: ({ focused }) => item.icon(focused),
    tabBarLabel: () => <Text>{item.title || ""}</Text>,
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item.title
  };
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CartStack" component={CartStackNavigator} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBarLabel: {
    color: "#292929",
    fontSize: 12
  },
  tabContainer: {
    height: 60
  }
});
export default BottomTabNavigator;
