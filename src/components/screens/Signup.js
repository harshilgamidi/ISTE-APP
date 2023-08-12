import { StyleSheet, Text, View,Image, Button, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";
import logo from "../../../assets/iste.png";
import bg from "../../../assets/Bg.jpg";
import { useNavigation } from '@react-navigation/native';
import { button1 } from './Common/Button';
import { header1 } from './Common/formcss';
import validator from 'validator';
const Signup = ({navigation}) => {
  const [inputs,Setinputs] = useState({
    FullName:"",
    College:"",
    Branch:"",
    Phone:"",
    email:"",
    password:"",
  })
  const [errorMessage,SetErrorMessage] = useState(null);

   const handleSubmit=()=>{
           if(inputs.FullName == ''||inputs.Branch == ''||inputs.College == ''||inputs.Phone ==''||inputs.email==''||inputs.password=='')
           {
            SetErrorMessage("All fields are required");
           }
           else if (!validator.isEmail(inputs.email))
           {
            Alert.alert("Email-Alert","Invalid Email",[{text:"Ok"}]);
           }
           else if (inputs.password.length<=8)
           {
            Alert.alert("Password Authentication","Password Length should be greater than 8",[{text:"OK"}]);
           }
           else{
              fetch('http://192.168.136.149:5000/users/signup',{
              method:'POST',
              headers:{
                'Content-Type':"application/json"
              },
              body:JSON.stringify(inputs)
            }).then(res =>res.json()).then(data=>{if(data.message=="User already Exist! Login Instead."){
              Alert.alert("Alert⚠️","User already exist, Login Instead",[{text:"OK",onPress:()=>navigation.navigate("Login")}])
            }else{
              Alert.alert("Sign up",'Details Submitted Succesfully',[{
                text:"ok",onPress:()=>navigation.navigate('Login')}])
            }}
            ).catch(err=>console.log(err))
           }
         }
  return (
    <View style = {styles.container}>
    <View style ={styles.s2}>
      <Text style = {styles.Mainhead}>SignUp</Text>
      <Text style = {header1}>Create an account</Text>
      {
        errorMessage?<Text style={{fontWeight:'bold',marginBottom:5}}>{errorMessage}</Text>:null
      }
  <View style={styles.container1}>
  <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          selectionColor={'white'}
          placeholder="FullName"
          placeholderTextColor="white"
          onChangeText={(text)=>Setinputs({...inputs,FullName:text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
        selectionColor={'white'}
          style={styles.TextInput}
          placeholder="College Name"
          placeholderTextColor="white"
          onChangeText={(text)=>Setinputs({...inputs,College:text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          selectionColor={'white'}
          placeholder="Branch"
          placeholderTextColor="white"
          onChangeText={(text)=>Setinputs({...inputs,Branch:text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          selectionColor={'white'}
          placeholder="PhoneNumber"
          placeholderTextColor="white"
          keyboardType='numeric'
          onChangeText={(text)=>Setinputs({...inputs,Phone:text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          selectionColor={'white'}
          placeholder="Email"
          placeholderTextColor="white"
          keyboardType='email-address'
          onChangeText={(text)=>Setinputs({...inputs,email:text})}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          selectionColor={'white'}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          enablesReturnKeyAutomatically
          onChangeText={(text)=>Setinputs({...inputs,password:text})}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}
       onPress ={handleSubmit}>
        <Text style={styles.loginText}>SIGN-UP</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot_button1} onPress={()=>navigation.navigate('Login')}>Move to LogIn</Text>
      </TouchableOpacity>
    </View>
      </View>
      </View>
    
  )
}

export default Signup

const styles = StyleSheet.create({
  container:{
    marginTop:70,
    width:'100%',
    height:'100%',
},
container1:{
  width:'100%',
  height:"100%"
},
s2:{
  width:"100%",
  height:"70%",
  display:"flex",
  alignItems:"center",
  backgroundColor:"white",
  borderTopLeftRadius:35,
  borderTopRightRadius:35,
  borderBottomRightRadius:35,
  borderBottomLeftRadius:35,

},
logo:{
  resizeMode:'center',
},
head:{
  color:"white",
  fontSize:17,
},
spaces:{
  width:"100%",
  height:"20%",
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
},
head1:{
  color:"white",
  fontSize:17,
  marginBottom:10
},
Mainhead:{
  color:"black",
  fontSize:25,
  fontWeight:"bold",
  marginTop:10,
},
inputView: {
  backgroundColor: "skyblue",
  marginLeft:40,
  borderRadius: 30,
  width: "75%",
  height: 45,
  marginBottom: 10,
alignItems: "center",
},

TextInput: {
  height: 50,
  flex: 1,
  padding: 10,
  marginLeft: 10,
},

forgot_button: {
  height: 30,
  marginBottom: 0,
  marginLeft:20
},
loginBtn: {
  width: "45%",
  borderRadius: 25,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 20,
  marginLeft:95,
  backgroundColor: "#FF1493",
},
loginText:{
color:'white',
},
forgot_button1:{
marginLeft:130,
marginTop:15,
},
})