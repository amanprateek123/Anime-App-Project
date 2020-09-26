import React, { useState } from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable'
import { NavigationContainer } from '@react-navigation/native';

export default function SignUp({navigation}) {
   const [data,setData] = useState({
       email:'',
       password:'',
       confirm:'',
       inputChng:false,
       secure:true,
       secure_1:true
   })

   const textChange = (val)=>{
       if(val.length!=0){
        setData({
            ...data,
            email:val,
            inputChng:true
        })
       }
       else{
        setData({
            ...data,
            email:val,
            inputChng:false
        })
       }
   }

   const handlePass = (val)=>{
       setData({
           ...data,
           password:val,           
       })
   }
   const handleConf = (val)=>{
       setData({
           ...data,
           confirm:val
       })
   }

   const updateSecure = ()=>{
       setData({
           ...data,
           secure:!data.secure
       })
    }
    const updateSecure_1 = ()=>{
        setData({
            ...data,
            secure_1:!data.secure_1
        })
     }

    return (
        <View style={styles.container} >            
           <StatusBar backgroundColor='red' barStyle="light-content"/>
           <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
           </View>
           <Animatable.View 
           animation="fadeInUpBig"
           style={styles.footer}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action} >
                <FontAwesome
                 name="user-o"
                 color='red'
                 size={20}
                />
                <TextInput 
                placeholder="Your Email" 
                style={styles.textInput}
                onChangeText={(val)=>textChange(val)}
                />
                {data.inputChng?
                <Animatable.View
                animation="bounceIn"
                >
                    <Feather 
                   name="check-circle"
                   size={20}
                   color="green"                
                />
                </Animatable.View>:null}
            </View>
            <Text style={[styles.text_footer,{marginTop:30}]}>Password</Text>
            <View style={styles.action} >
                <FontAwesome
                 name="lock"
                 color='red'
                 size={20}
                />
                <TextInput 
                placeholder="Your Password" 
                style={styles.textInput}
                secureTextEntry={data.secure}
                onChangeText={(val)=>handlePass(val)}
                />
                <TouchableOpacity 
                onPress={()=>updateSecure()}>
                <Feather 
                name={!data.secure?"eye":"eye-off"}
                size={20}
                color="red"                
                />
                </TouchableOpacity>
            </View>
            <Text style={[styles.text_footer,{marginTop:30}]}>Confirm Password</Text>
            <View style={styles.action} >
                <FontAwesome
                 name="lock"
                 color='red'
                 size={20}
                />
                <TextInput 
                placeholder="Confirm Your Password" 
                style={styles.textInput}
                secureTextEntry={data.secure_1}
                onChangeText={(val)=>handleConf(val)}
                />
                <TouchableOpacity 
                onPress={()=>updateSecure_1()}>
                <Feather 
                name={!data.secure_1?"eye":"eye-off"}
                size={20}
                color="red"                
                />
                </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity style={styles.btns} >
                        <Text style={styles.text2} >Sign Up</Text>
             </TouchableOpacity>
             <TouchableOpacity
             onPress={()=>navigation.goBack()}
             style={[styles.signIn,{
                 borderColor:'red',
                 borderWidth:1,
                 marginTop:15
             }]}
             >
                 <Text style={[styles.textSign,{
                     color:'red'
                 }]} >Sign In</Text>

             </TouchableOpacity>
            </View>
           </Animatable.View>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'black'
      },
      header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: 'black',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    btns:{
      elevation: 8,
      backgroundColor: "red",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 8,
      marginHorizontal:20,
      marginVertical:10,
      justifyContent: 'center',
      alignItems: 'center',
      width:'80%',
      height:50
    },
    text2:{
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      textTransform: "capitalize"
    },
    signIn: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})