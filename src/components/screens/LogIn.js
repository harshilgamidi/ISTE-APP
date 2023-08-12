import { StyleSheet, Text, View,Image, Button, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react';
import logo from "../../../assets/iste.png";
import bg from "../../../assets/Bg.jpg";
import { useNavigation } from '@react-navigation/native';
import { button1 } from './Common/Button';
import { header1 } from './Common/formcss';
import ForgetPassword from './ForgetPassword';
const LogIn = ({navigation}) => {
   const [inputs,setinputs] = useState({
    email:"",
    password:""
   })
   const [active,setactive] = useState(true);

   const [errorMessage,SetErrorMessage] = useState(null);
   const handleSubmit =()=>{
      if(inputs.email==''||inputs.password=='')
      {
        SetErrorMessage("All fields are required!");
      }
      else{
        fetch('http://192.168.136.149:5000/users/login',{
              method:'POST',
              headers:{
                'Content-Type':"application/json"
              },
              body:JSON.stringify(inputs)
            }).then(res =>res.json()).then(data=>{if(data.message=="Incorrect Password"){
              Alert.alert("LogIn Alert","Password Incorrect, please check your password and try again!",[{text:"OK",onPress:()=>navigation.navigate('Login')}])
            }
            else if(data.message=="No user Found!"){
              Alert.alert("LogIn Alert","No User Found!, please signup",[{text:"OK",onPress:()=>navigation.navigate('Signup')}])
            }
            else{
              Alert.alert("Login Authentication","Login Successfull",[{text:"OK",onPress:()=>navigation.navigate('HomePage')}])
            }
          }).
            catch(err=>console.log(err))
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
      <Text style = {styles.Mainhead}>LogIn</Text>
      <Text style = {header1}>Sign in to Continue</Text>
      {
        errorMessage?<Text style={{fontWeight:"bold"}}>{errorMessage}</Text>:null
      }
  <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          selectionColor={'white'}
          placeholderTextColor="white"
          onChangeText={(text) => setinputs({...inputs,email:text})}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          selectionColor={'white'}
          placeholderTextColor="white"
          secureTextEntry={active}
          enablesReturnKeyAutomatically
          onChangeText={(text) => setinputs({...inputs,password:text})}
        />
      </View>
 
      <TouchableOpacity onPress={()=>navigation.navigate('Forgetpassword')} style={{width:150}}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {()=>setactive(!active)}>
        <Text style = {styles.forgot_button2}>{active?"Show🔓":"Hide🔒"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}
      onPress={handleSubmit}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
        <Text style={styles.forgot_button1}>Move to Sign Up</Text>
      </TouchableOpacity>
 
    </View>
      </View>
       </View>
  )
}

export default LogIn

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
        height:"55%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
    s2:{
        width:"100%",
        height:"45%",
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
        marginLeft:20,
        fontSize:14
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
  },
  forgot_button2:{
    height: 30,
    marginBottom: 0,
    position:"absolute",
    bottom:3,
    color:"black",
    marginLeft:260,
    fontSize:15
  },
 
    
})