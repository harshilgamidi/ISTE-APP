import { StyleSheet, Text, View,Image, Button, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react';
import logo from "../../../assets/iste.png";
import bg from "../../../assets/Bg.jpg";
import { useNavigation } from '@react-navigation/native';
import { button1 } from './Common/Button';
import { header1 } from './Common/formcss';

const NewPassword = ({navigation}) => {
    const [newInputs,setinputs] =useState({
        password:"",
        confirmpassword:""
    })
    const handleSubmit = ()=>{
        if (newInputs.password!= newInputs.confirmpassword )
        {
           Alert.alert("Password Authentication","Both fields should match",[{text:"Ok"}])
        }
        else if(newInputs.password.length<8)
        {
          Alert.alert("Password Authentication","Password Length should be greater than 8",[{text:"Ok"}])
        }
        else
        {
          
          fetch('http:// 192.168.1.4:5000/users/Newpassword',{
              method:'POST',
              headers:{
                'Content-Type':"application/json",
              },
              body:JSON.stringify(newInputs)}).then(res=>res.json()).then (data=>{if(data.message=="Details Updated!"){
                Alert.alert("Password Updating","Password Successfully Updated",[{text:"OK",onPress:()=>navigation.navigate('Login')}])
              }}).catch(err=>console.log(err))
              Alert.alert("Password Updating","Update Failed",[{text:"OK"}]);
        }

        }
  return (
    <View style={styles.container}>
      <Image style={styles.pattern} source={bg}/>
      <View style={styles.s1}>
        <View  style = {styles.spaces}>
        <Image  style = {styles.logo} source={logo} />
        </View>
      </View>
      <View style ={styles.s2}>
      <Text style = {styles.Mainhead}>Change your Password</Text>
      <Text style = {header1}>Don't forget your password</Text>
  <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="New - Password"
          selectionColor={'white'}
          placeholderTextColor="white"
          onChangeText={(text) => setinputs({...newInputs,password:text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          selectionColor={'white'}
          placeholderTextColor="white"
          onChangeText={(text) => setinputs({...newInputs,confirmpassword:text})}
          
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText} >Submit</Text>
      </TouchableOpacity>
    </View>
      </View>
       </View>
  )
}

export default NewPassword;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
    },
    pattern:{
        top:0,
        position:"absolute",
        width:"100%",
        height:"100%",
        zIndex:-1,
    },
    s1:{
        width:"100%",
        height:"65%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
    s2:{
        width:"100%",
        height:"35%",
        display:"flex",
        alignItems:"center",
        backgroundColor:"white",
        borderTopLeftRadius:35,
        borderTopRightRadius:35,

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
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginLeft:89,
        backgroundColor: "#FF1493",
      },
  loginText:{
    color:'white',
  },
  forgot_button1:{
    marginLeft:130,
    marginTop:15,

  }
    
})