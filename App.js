import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Navigation from './Navigation/Navigation'

import { createStackNavigator } from "@react-navigation/stack";
import RootStack from './Navigation/rootStack/rootStack'
const Stack = createStackNavigator();

const App = ()=> {
  return (
    <NavigationContainer> 
       <Stack.Navigator headerMode="none" >
         <Stack.Screen component={RootStack} name="Root" />
         <Stack.Screen component={Navigation} name="Navigation" />
       </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
