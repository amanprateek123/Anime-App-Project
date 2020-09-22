import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator()

function MyTabs() {
  return (
    <NavigationContainer>
       <Tab.Navigator 
       initialRouteName="Home"
       activeColor="red"
       inactiveColor="white"
       barStyle={{ backgroundColor: '#000' }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Settings" component={SettingsScreen}  options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>

    </NavigationContainer>
   
  );
}

const HomeScreen = ()=>{
return  (<View styles={styles.container} >
    <Text styles={{textColor:'red'}} >HomeScreen</Text>
  </View>)
}

const SettingsScreen = ()=>{
  return (<View>
    <Text styles={styles.text} >SettingsScreen</Text>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    color:'red',
    justifyContent: 'center',
  },
  text:{
    color:'blue'
  }
});

export default MyTabs;