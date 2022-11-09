import * as React from "react";
import Home from "./screens/home";
import AddProduct from "./screens/addProcudt";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Homescreen = "Home";
const Settingscons = "AddProduct";
const Container = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "ios-information-circle-outline";
            } else if (route.name === "AddProduct") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name={Homescreen} component={Home} />
        <Tab.Screen name={Settingscons} component={AddProduct} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Container;
