import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'


import Splash from '../../Screens/RootScreen/Splash'
import SignIn from '../../Screens/RootScreen/SignIn'
import SignUp from '../../Screens/RootScreen/SignUp'


const RootStack = createStackNavigator()

export default function rootStack() {
    return (
        <RootStack.Navigator headerMode="none" >
            <RootStack.Screen name="Splash" component={Splash}  />
            <RootStack.Screen name="SignIn" component={SignIn}  />
            <RootStack.Screen name="SignUp" component={SignUp}  />
        </RootStack.Navigator>
    )
}
