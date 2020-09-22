import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator()

import { MainStackNavigator, DetailStackNavigator } from "./StackNav";
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    shifting={false}
    initialRouteName="Home"
    activeColor="red"
    inactiveColor="white"
    barStyle={{ backgroundColor: 'black' }}>
      <Tab.Screen 
       name="Home"
       component={MainStackNavigator}
       options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen
       name="My List"
       component={DetailStackNavigator}
       options={{
        tabBarLabel: 'My List',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bookmark" color={color} size={26} />
        ),
      }} />
      <Tab.Screen
       name="Video"
       component={DetailStackNavigator}
       options={{
        tabBarLabel: 'Watch Anime',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="application" color={color} size={26} />
        ),
      }} />
      <Tab.Screen
       name="Notification"
       component={DetailStackNavigator}
       options={{
        tabBarLabel: 'Notification',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }} />
      <Tab.Screen
       name="Profile"
       component={DetailStackNavigator}
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;