import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from "@react-navigation/drawer";
import Logout from "./Logout";
import { NavigationContainer } from "@react-navigation/native";
import QRgenerator from "./QRgenerator";
import QRscanner from "./QRscanner";
import ProductHome from "./ProductHome";
import ProductDetails from "./ProductDetails";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { routes, screens } from "./navs/Routes";
import BottomTabNavigator from "./navs/BottomTabNavigator";

const Drawer = createDrawerNavigator();

const LandingPage = () => {
  const userInfo = useSelector((state: any) => {
    return state.userLoginState.value;
  });
  const Drawer = createDrawerNavigator();

  const CustomDrawerContent = props => {
    return (
      <DrawerContentScrollView {...props}>
        {routes
          .filter(route => route.showInDrawer)
          .map((route, index) => {
            const focused = index === props.state.index;
            return (
              <DrawerItem
                key={route.name}
                label={() => (
                  <Text
                    style={
                      focused ? styles.drawerLabelFocused : styles.drawerLabel
                    }
                  >
                    {route.title}
                  </Text>
                )}
                onPress={() => props.navigation.navigate(route.name)}
                style={[
                  styles.drawerItem,
                  focused ? styles.drawerItemFocused : null
                ]}
              />
            );
          })}
      </DrawerContentScrollView>
    );
  };
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: "#551E18",
            height: 50
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.headerLeft}
            >
              <Icon name="bars" size={20} color="#fff" />
            </TouchableOpacity>
          )
        })}
      >
        <Drawer.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{
            title: "Home",
            headerRight: () => (
              <View style={styles.headerRight}>
                <Icon name="bell" size={20} color="#fff" />
              </View>
            )
          }}
        />
        {/* <Drawer.Screen name="Home" component={ProductHome} />
        <Drawer.Screen name="Details" component={ProductDetails} />
        <Drawer.Screen name="QR Generator" component={QRgenerator} />
        <Drawer.Screen name="QR Scanner" component={QRscanner} />
        <Drawer.Screen name="Sign Out" component={Logout} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "500"
  },
  headerRight: {
    marginRight: 15
  },
  // drawer content
  drawerLabel: {
    fontSize: 14
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: "#551E18",
    fontWeight: "500"
  },
  drawerItem: {
    height: 50,
    justifyContent: "center"
  },
  drawerItemFocused: {
    backgroundColor: "#ba9490"
  }
});
export default LandingPage;
