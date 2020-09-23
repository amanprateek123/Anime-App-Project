import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Screens/Home";
import Setting from '../Screens/Setting'
import Detail from '../Screens/Details'

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "black",
    },
    headerBackImage:"",
    headerTintColor: "white",
    headerBackTitle: "",
  };

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} headerMode="none" >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

const DetailStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle} headerMode="none">       
      <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    );
  }
  
  export { MainStackNavigator, DetailStackNavigator };