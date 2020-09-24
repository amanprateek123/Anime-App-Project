import React from "react";
import { View, Button, Text, StyleSheet,Image,ScrollView, Dimensions,ImageBackground, } from "react-native";
import {WebView} from 'react-native-webview'
import {Video} from 'expo-av'

const {width,height} = Dimensions.get('window')

const Detail = ({navigation}) => {
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
      <View style={{padding:10,borderBottom:'1px solid red'}} >
        <Text style={{color:'white',fontSize:23}}>Summary:</Text>
        <Text style={{color:'white',fontSize:16}} >
        Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.
        </Text>
        <Text style={{color:'white',fontSize:16,marginTop:10}} >
        Now, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes.
        </Text>
      </View>
      <View style={{padding:10,borderBottom:'1px solid red'}} >
         <Text style={{color:'white',fontSize:14,marginTop:5}} >English:<Text style={{fontSize:13,marginLeft:5}} >Naruto</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Synonyms:<Text style={{fontSize:13,marginLeft:5}} >NARUTO</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Type:<Text style={{fontSize:13,marginLeft:5,color:'red'}} >TV</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Episodes:<Text style={{fontSize:13,marginLeft:5}} >220</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Status:<Text style={{fontSize:13,marginLeft:5,color:'red'}} >Finished Airing</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Aired:<Text style={{fontSize:13,marginLeft:5}} >Oct 03, 2002 to Feb 08, 2007</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Season:<Text style={{fontSize:13,marginLeft:5,color:'red'}} >Fall 2002</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Studio:<Text style={{fontSize:13,marginLeft:5}} >Studio Pierrot</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >Duration:<Text style={{fontSize:13,marginLeft:5}} >23 min</Text></Text>
         <Text style={{color:'white',fontSize:14,marginTop:5}} >External Links:<Text style={{fontSize:13,marginLeft:5,color:'red'}} >AniList Kitsu AniDB AnimeNewsNetwork MyAnimeList Background</Text></Text>
      </View>
      <View >
         <Text style={{color:'white',fontSize:23,padding:10}} >Trailer:</Text>
         <View>
           <WebView
           source={{uri:'https://youtu.be/-G9BqkgZXRA'}}
           style={styles.video}
           javaScriptEnabled
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


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    backgroundColor:'black',
  },
  mainImg:{
       width:150,
       height:200,
       margin:'auto'
  },
  video:{
    width:'100%',
    height:height,
  }
});

export default Detail;