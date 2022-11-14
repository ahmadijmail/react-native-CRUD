import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home'
import addProcudt from '../screens/addProcudt';
import OneProduct from '../screens/OneProduct';
const Stack = createNativeStackNavigator();
const Index = () => {
  const screenOptions = {
   // animation: 'slide_from_right',
    //gestureEnabled: true,
  //  headerBackButtonMenuEnabled: false,
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="addProcudt" component={addProcudt} />
      <Stack.Screen name="OneProduct" component={OneProduct} />
    </Stack.Navigator>
  );
};

export default Index;
