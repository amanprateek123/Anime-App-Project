import React from 'react';
import { StyleSheet, Text, TextInput, View,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import MainTab from './Navigation/mainTab'
import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchBar } from 'react-native-elements';

const App = ({navigation})=> {
  const [search,setSearch]= React.useState('')
  const updateSearch = (search) => {
    setSearch(search);
  };
  console.log(search)
  return (
    <NavigationContainer> 
      <View style={styles.container} >
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/anime-logo-png-Transparent-Images.png',
        }}
      />
      <View style={{width:'60%',position:'absolute',top:15,right:0}} >
      {/* <TextInput placeholder="Search anime..." style={styles.searchInput} /> */}
       <SearchBar
       platform="default"
       placeholder="Type Here..."
       onChangeText={updateSearch}
       placeholderTextColor="white"
       containerStyle={{height:49,width:'100%',backgroundColor:'black'}}
       inputContainerStyle={{height:50,marginTop:-10,backgroundColor:'transparent'}}
       value={search}/>
      </View>
        </View>    
       <MainTab/>
    </NavigationContainer>
   
  );
}
export default App;
const styles = StyleSheet.create({
  container:{
     display:'flex',
     width:'100%',
     backgroundColor:'black',
     color:'white',
     flexDirection:'row',
     paddingTop: 15
  },
   tinyLogo: {
    width: 150,
    height:50,
    marginLeft:20
  },
  searchInput:{
    padding:12,
    fontSize:16,
    backgroundColor:'white',
    color:'black'
  }
})