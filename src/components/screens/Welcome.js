import { StyleSheet, Text, View,Image, Button } from 'react-native'
import React from 'react'
import logo from "../../../assets/iste.png";
import bg from "../../../assets/Bg.jpg";
import { useNavigation } from '@react-navigation/native';
import { button1 } from './Common/Button';
import LogIn from './LogIn';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.pattern} source={bg}/>
      <View style={styles.s1}>
      <Text style={styles.Heading}>Welcome To ISTE Platform</Text>
      <Image style={styles.logo} source={logo} />
      <Text style={button1} onPress={()=>navigation.navigate('Login')}> Get-Started</Text>
      <Text style={styles.Heading}>Lets Get Started</Text>
      </View>
      </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
    },
    pattern:{
        top:0,
        zIndex:-1,
        position:"absolute",
        width:"100%",
        height:"100%"
    },
    s1:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    },
    logo:{
        resizeMode:'center',
    },
    Heading:{
        marginTop:40,
        fontSize:25,
        color:"white"
    },
    Heading2:{
        marginBottom:60,
        fontSize:25,
        color:"white"
    },

})