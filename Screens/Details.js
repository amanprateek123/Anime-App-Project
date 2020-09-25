import React from "react";
import { View, Button, Text, StyleSheet,Image,ScrollView, Dimensions,ImageBackground, } from "react-native";
import {WebView} from 'react-native-webview'
import {Video} from 'expo-av'
import {useFonts} from 'expo-font';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';

const {width,height} = Dimensions.get('window')

const Detail = ({navigation}) => {
  // const [loaded] = useFonts({
  //   Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
  // });
  // if (!loaded) {
  //   return null;
  // }
  return (
    <ScrollView style={styles.center}>
      <ImageBackground source={{
          uri: 'https://cdn.animenewsnetwork.com/thumbnails/crop900x350/video/category/62/key_art_naruto.jpg',
        }} style={{height:250,opacity:0.7}} >
        
      </ImageBackground>
      <View style={{backgroundColor:'red'}} >
      <Text style={{textAlign:'center',color:'white',fontSize:23}} >Naruto</Text>
      <Text style={{textAlign:'center',color:'white',fontSize:23}} >ナルト</Text>
      </View>
      <View style={styles.summary} >
        <Text style={{color:'white',fontSize:23}}>Summary:</Text>
        <Text style={{color:'white',fontSize:14,}} >
        Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.
        </Text>
        <Text style={{color:'white',fontSize:14,marginTop:10}} >
        Now, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes.
        </Text>
      </View>
      <View style={styles.prop} >
         <Text style={{color:'white',fontSize:14,marginTop:5}} >English:  <Text style={{fontSize:13}} >Naruto</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Synonyms:  <Text style={{fontSize:13}} >NARUTO</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Type:  <Text style={{fontSize:13,color:'red'}} >TV</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Episodes:  <Text style={{fontSize:13}} >220</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Status:  <Text style={{fontSize:13,color:'red'}} >Finished Airing</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Aired:  <Text style={{fontSize:13}} >Oct 03, 2002 to Feb 08, 2007</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Season:  <Text style={{fontSize:13,color:'red'}} >Fall 2002</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Studio:  <Text style={{fontSize:13}} >Studio Pierrot</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Duration:  <Text style={{fontSize:13}} >23 min</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >External Links:  <Text style={{fontSize:13,color:'red'}} >AniList Kitsu AniDB AnimeNewsNetwork MyAnimeList Background</Text></Text>
      </View>
      <View>
         <Text style={{color:'white',fontSize:23,padding:10}} >Trailer:</Text>
         <View>
           <WebView
           source={{html:'<iframe width="100%" height="500" src="https://www.youtube.com/embed/-G9BqkgZXRA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}}
           style={styles.video}
           javaScriptEnabled
           allowsFullscreenVideo={true}
           />
            {/* <Video
           source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
           rate={1.0}
           volume={1.0}
           isMuted={false}
           resizeMode="contain"
           shouldPlay={false}
           isLooping={false}
           useNativeControls
           style={styles.video}
/> */}        
         </View>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:"center",marginTop:10}} >
         <TouchableOpacity style={styles.btn1} >
              <Text style={styles.txt1}>Add to WishList   <Icon name="bookmark" size={20} /> </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.btn1}>
           <Text  style={styles.txt1}>Watch Episodes    <Icon name="play" size={20}  /> </Text>
         </TouchableOpacity>
      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    backgroundColor:'black',
  },
  summary:{
    paddingVertical:10,
    marginHorizontal:10,
    borderBottomColor:'red',
    borderWidth:0.3
  },
  prop:{
    paddingVertical:10,
    marginHorizontal:10,
    borderBottomColor:'red',
    borderWidth:0.3
  },
  mainImg:{
       width:150,
       height:200,
       margin:'auto'
  },
  video:{
    width:width,
    height:200,
    backgroundColor:'black',
  },
  btn1: {
      elevation: 8,
      backgroundColor: "red",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 8,
      marginHorizontal:20,
      marginVertical:10
    },
    txt1:{
      fontSize: 16,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "capitalize"
    }
});

export default Detail;