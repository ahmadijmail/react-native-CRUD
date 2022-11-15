import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//////////////////Components///////////////////
import CustomFooter from "./CustomFooter";
import index from "../Stack/Index";
import CustomHeader from "../Stack/CustomHeader";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomFooter {...props} />}
      backBehavior="history"
    >
      <Tab.Screen
        name="stackNavigator"
        component={index}
        options={{ header: (props) => <CustomHeader {...props} /> }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
