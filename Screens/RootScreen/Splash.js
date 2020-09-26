import React from 'react'
import {View,Text,Dimensions,StyleSheet,Image,StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable'

export default function Splash({navigation}) {
    return (
        <View style={styles.container} >
           <StatusBar backgroundColor='red' barStyle="light-content"/>
            <View style={styles.header} >
            <Animatable.Image
              animation="bounceIn"
              duraton="1500"
              style={styles.logo}
              resizeMode="stretch"
              source={{
              uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/anime-logo-png-Transparent-Images.png',
              }}
              />
            </View>
            <Animatable.View
             animation="fadeInUpBig"
             style={styles.footer} >
                <Text style={styles.title} >Watch the Anime with best experience!</Text>
                <Text style={styles.text} >Sign In with Account</Text>
                <View style={{marginTop:20}} >
                    <TouchableOpacity style={styles.btns} onPress={()=>navigation.navigate('SignIn')} >
                        <Text style={styles.text2} >Get Started</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

const {height} = Dimensions.get('screen');
const height_logo = 0.28*height;

const styles= StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'black'
  }   ,
  header:{
     flex:2,
     justifyContent:'center',
     alignItems:'center'
  },
  footer:{
      flex:1,
      backgroundColor:'white',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      padding:25
  },
  logo:{
      height:height_logo,
      width:'100%',
      margin:'auto'
  },
  title:{
      color:'red',
      fontSize:26
  },
  text:{
      color:'black',
      fontSize:16,
  },
  btns:{
    elevation: 8,
    backgroundColor: "red",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginHorizontal:20,
    marginVertical:10,
  },
  text2:{
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "capitalize"
  }
})