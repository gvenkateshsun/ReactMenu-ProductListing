import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export const screens = {
  Home: "ProductHome",
  Details: "ProductDetails",
  Login: "Login",
  Logout: "Logout",
  Profile: "Profile",
  QRgenerator: "QRgenerator",
  QRscanner: "QRscanner",
  Cart: "CartStackNavigator"
};

export const routes = [
  {
    name: screens.Home,
    title: "Home",
    showInTab: false,
    showInDrawer: true,
    icon: focused => (
      <Icon name="home" size={30} color={focused ? "#551E18" : "#000"} />
    )
  },
  {
    name: screens.Details,
    title: "Details",
    showInTab: false,
    showInDrawer: true,
    icon: focused => (
      <Icon name="home" size={30} color={focused ? "#551E18" : "#000"} />
    )
  },
  {
    name: screens.QRgenerator,
    title: "QRgenerator",
    showInTab: false,
    showInDrawer: true,
    icon: focused => (
      <Icon name="home" size={30} color={focused ? "#551E18" : "#000"} />
    )
  },
  {
    name: screens.Logout,
    title: "SignOut",
    showInTab: false,
    showInDrawer: true,
    icon: focused => (
      <Icon name="home" size={30} color={focused ? "#551E18" : "#000"} />
    )
  },
  {
    name: screens.Cart,
    title: "Cart",
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <Icon name="home" size={30} color={focused ? "#551E18" : "#000"} />
    )
  }
];
