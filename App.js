import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Navigation from './Navigation/Navigation'

import RootStack from './Navigation/rootStack/rootStack'

const App = ()=> {
  return (
    <NavigationContainer> 
      <RootStack/>
       {/* <Navigation/> */}
    </NavigationContainer>
  );
}
export default App;
