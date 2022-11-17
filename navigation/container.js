import * as React from "react";
import Home from "./screens/home";
import AddProduct from "./screens/addProcudt";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import OneProduct from "./screens/OneProduct";
import Cart from "./screens/Cart";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Tabs from "./Tabs/Tabs";
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Container = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
    backBehavior="histroy"
      screenOptions={{
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen
        name="AllScreens"
        component={Tabs}
        options={{ headerShown: false }}
      />
      {/* <Cart/> */}
       {/* <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      /> */}
    </Drawer.Navigator>
  );
};

export default Container;
