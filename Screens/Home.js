import React from "react";
import { View, Button, Text,Image, StyleSheet,ScrollView,SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.center} >
    <View style={{marginBottom:10}} >
      <Text style={{color:'white',marginLeft:10,marginBottom:10,fontSize:22}} >Most Trending Animes</Text>
      <SafeAreaView>
          <ScrollView horizontal >
         <View >
         <TouchableOpacity onPress={()=>navigation.navigate('Detail')} >
         <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR93,0,630,1200_AL_.jpg',
        }}
      />
         </TouchableOpacity>
         </View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://vignette.wikia.nocookie.net/whumpapedia/images/2/27/AttackonTitan.jpg/revision/latest?cb=20200608001749',
        }}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://i2.wp.com/thepopbreak.com/wp-content/uploads/2019/09/f1fe5c7a43cb2f38f4152a58f89479821554508873_main-copy.jpg?fit=750%2C555&ssl=1',
        }}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg',
        }}
      />
          </ScrollView>
      </SafeAreaView>
    </View>
    <View style={{marginBottom:10}} >
      <Text style={{color:'white',marginLeft:10,marginBottom:10,fontSize:22}} >New Episodes Animes</Text>
      <SafeAreaView>
          <ScrollView horizontal >
          <View >
         <TouchableOpacity onPress={()=>navigation.navigate('Detail')} >
         <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR93,0,630,1200_AL_.jpg',
        }}
      />
         </TouchableOpacity>
         </View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://vignette.wikia.nocookie.net/whumpapedia/images/2/27/AttackonTitan.jpg/revision/latest?cb=20200608001749',
        }}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://i2.wp.com/thepopbreak.com/wp-content/uploads/2019/09/f1fe5c7a43cb2f38f4152a58f89479821554508873_main-copy.jpg?fit=750%2C555&ssl=1',
        }}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg',
        }}
      />
          </ScrollView>
      </SafeAreaView>
      {/* <Button title="Go to About Screen" onPress={()=> navigation.navigate('Detail')} /> */}
    </View>
    <View style={{marginBottom:10}} >
      <Text style={{color:'white',marginLeft:10,marginBottom:10,fontSize:22}} >Highest rated Animes</Text>
      <SafeAreaView>
          <ScrollView horizontal >
          <View >
         <TouchableOpacity onPress={()=>navigation.navigate('Detail')} >
         <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR93,0,630,1200_AL_.jpg',
        }}
      />
         </TouchableOpacity>
         </View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://vignette.wikia.nocookie.net/whumpapedia/images/2/27/AttackonTitan.jpg/revision/latest?cb=20200608001749',
        }}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://i2.wp.com/thepopbreak.com/wp-content/uploads/2019/09/f1fe5c7a43cb2f38f4152a58f89479821554508873_main-copy.jpg?fit=750%2C555&ssl=1',
        }}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg',
        }}
      />
          </ScrollView>
      </SafeAreaView>
      {/* <Button title="Go to About Screen" onPress={()=> navigation.navigate('Setting')} /> */}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    paddingTop:10,
    backgroundColor:'black',
  },
  tinyLogo:{
      width:150,
      height:250,
      marginLeft:10,
      borderRadius:20
  }
});

export default Home;