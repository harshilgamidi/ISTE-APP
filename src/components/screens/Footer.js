import { StyleSheet, Text, View,Image, Button, Animated } from 'react-native';
import React from 'react';
import { Linking } from 'react-native';
import logo from "../../../assets/iste.png";
import RouteMap from '../../../assets/RouteMap.png';
import HomePageImage from '../../../assets/HomePage.png';
import bg from "../../../assets/Bg.jpg";
import { useNavigation } from '@react-navigation/native';
import { button1 } from './Common/Button';
import LogIn from './LogIn';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Appbar,FAB,useTheme } from 'react-native-paper';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const Footer = () => {
  return (
    <View style={styles.background}>
        <Text style={{textAlign:'center',fontSize:35,fontWeight:'bold',color:'white',textDecorationLine:'underline'}}>Get in Touch</Text>
        <View style={styles.backgroundDetails}>
        <MaterialCommunityIcons style={styles.icons} name='map-marker'/>
        <Text style={{fontSize:22,color:'white',marginLeft:5}}>SRKR Engineering College, Chinnamiram,534204</Text>
        </View>
        <View style={styles.backgroundDetails}>
        <MaterialCommunityIcons style={styles.icons} name='phone'/>
        <Text style={{fontSize:22,color:'white',marginLeft:35,marginTop:8}}>+91 9848869016</Text>
        </View>
        <View style={styles.backgroundDetails}>
        <MaterialCommunityIcons style={styles.icons} name='email'/>
        <Text style={{fontSize:22,color:'white',marginLeft:10,marginTop:8}}>SRKRISTE2022@gmail.com</Text>
        </View>
        <View style={styles.backgroundDetails1}>
        <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/srkriste?igshid=YmMyMTA2M2Y=')}>
        <MaterialCommunityIcons style={styles.icons1} name='instagram'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Linking.openURL('https://www.facebook.com/SrkrIste?mibextid=ZbWKwL')}>
        <MaterialCommunityIcons style={styles.icons1} name='facebook'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Linking.openURL('https://www.linkedin.com/company/srkriste/')}>
        <MaterialCommunityIcons style={styles.icons1} name='linkedin'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Linking.openURL('https://youtube.com/@srkriste1995')}>
        <MaterialCommunityIcons style={styles.icons1} name='youtube'/>
        </TouchableOpacity>
        </View>
        </View>
  )
}

export default Footer;

const styles = StyleSheet.create({
    background:{
        backgroundColor:'darkorange',
        marginTop:15,
    },
    icons:{
        color:'white',
        fontSize:30,
        marginLeft:20,
        marginTop:10
    },
    backgroundDetails:{
        display:'flex',
        marginTop:10,
        flexDirection:'row',
    },
    backgroundDetails1:{
        display:'flex',
        marginTop:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    icons1:{
        color:'white',
        fontSize:40,
        marginRight:15,
        marginTop:10
    },
})