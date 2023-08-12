import { StyleSheet, Text, View,Image, Button, Animated,FlatList,Dimensions } from 'react-native';
import React from 'react';
import { Linking } from 'react-native';
import logo from "../../../assets/iste.png";
import RouteMap from '../../../assets/RouteMap.png';
import HomePageImage from '../../../assets/HomePage.png';
import Nipuna22 from './../../../assets/Nipuna22.jpg';
import sahara2 from './../../../assets/sahara2.jpg';
import sahara3 from './../../../assets/sahara3.jpg';
import sahara4 from './../../../assets/sahara4.jpg';
import Sahara from './../../../assets/Sahara.jpg';
import Sbms from './../../../assets/Sbms.jpg';
import groupPoto from './../../../assets/groupPhoto.jpeg';
import Award from './../../../assets/Award.jpg';
import bg from "../../../assets/Bg.jpg";
import { useNavigation } from '@react-navigation/native';
import { button1 } from './Common/Button';
import LogIn from './LogIn';
import aboutUsImg from './../../../assets/aboutUs.png'
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Appbar,FAB,useTheme } from 'react-native-paper';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from './Footer';
import Header from './Header';
import MainVideo from './MainVideo';


const AboutUs = ({navigation}) => {
   const {width} = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        <ScrollView>
        <Image style={styles.aboutUsImg}source={aboutUsImg}/>
        <View style={{display:'flex',flexDirection:'row',marginTop:60,marginLeft:15,marginBottom:160}}>
        <Text style={styles.Heading}>ABOUT</Text>
        <Text style={styles.Heading1}> US</Text>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginTop:100,marginLeft:15}}>
        <Text style={styles.Headings}>We believe in Peace and</Text>
        <Text style={styles.Headings1}>peaceful Development</Text>
        <Text style={styles.Headings}>not only for Ourselves</Text>
        <Text style={styles.Headings}>but for people all over the world!</Text>
        </View>
        <ScrollView horizontal={true}>
            <Image style={{maxHeight:width,width:width,resizeMode:'contain'}} source={sahara2}/>
            <Image style={{maxHeight:width,width:width,resizeMode:'contain'}} source={Sahara}/>
            <Image style={{maxHeight:width,width:width,resizeMode:'contain'}} source={sahara4}/> 
        </ScrollView>
        <View style={{marginBottom:25,alignItems:'center'}}>
            <Text style={styles.sHeading}>It organizes an annual convention for faculty and students separately every year where a large number of technocrats, technical teachers, policy makers, experts from the industry etc. participate and interact. Every year a National Seminar with a specific theme with respect to the latest development in the field of Science and Technology and societal problems is being arranged during the Annual convention and leading luminaries of technical education are invited to deliver special lectures and delegates will present research papers . ISTE is actively involved in many activities conducted by All India Council for Technical Education New Delhi (AICTE) and National Board of Accreditation New Delhi (NBA). Recently ISTE was partner to AICTE and NBA in the conduct of Second Chhatra Vishwakarma Award and WOSA respectively.</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('ImageScroll')}>
            <Text style={{color:'darkorange',textDecorationLine:'underline',marginLeft:15,marginTop:15,fontWeight:'bold'}}>Show More</Text>
        </TouchableOpacity>
        <Image style={styles.image}source={RouteMap} />
        <Footer/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default AboutUs;

const styles = StyleSheet.create({
 container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#152739',
 },
 aboutUsImg:{
    top:0,
    width:'80%',
    height:'20%',
    position:'absolute',
    left:115,
    zIndex:-1
 },
 Heading:{
    fontSize:45,
    color:'white',
    fontWeight:'bold',
},
Heading1:{
    fontSize:45,
    color:'darkorange',
    fontWeight:'bold'
},
sHeading:{
    fontSize:14,
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    width:'85%'
},
image:{
    width:400,
    height:180,
    marginTop:30
},
Headings:{
    fontSize:28,
    color:'white',
    fontWeight:'bold',
   },
   Headings1:{
    fontSize:30,
    color:'darkorange',
    fontWeight:'bold'
},
Headings11:{
    fontSize:28,
    marginLeft:15,
    color:'darkorange',
    fontWeight:'bold'
},
Headingss:{
    fontSize:28,
    marginLeft:15,
    color:'white',
    fontWeight:'bold',
   },

})