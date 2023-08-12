import { StyleSheet, Text, View,Image, Button, Animated ,Dimensions} from 'react-native';
import React from 'react';
import { Linking } from 'react-native';
import logo from "../../../assets/iste.png";
import RouteMap from '../../../assets/RouteMap.png';
import Day_SpecialImg from './../../../assets/Days_Special.png';
import HomePageImage from '../../../assets/HomePage.png';
import bg from "../../../assets/Bg.jpg";
import { useNavigation } from '@react-navigation/native';
import { button1 } from './Common/Button';
import GalleryImg from './../../../assets/GalleryImg.png';
import LogIn from './LogIn';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Appbar,FAB,useTheme } from 'react-native-paper';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from './Footer';
import Header from './Header';
import TodayPost from "./../../../assets/Today's_Post.jpg";
const Gallery = () => {
    const {width} = Dimensions.get('window')
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        <ScrollView>
        <Image style={styles.GalImg}source={GalleryImg}/>
        <View style={{display:'flex',flexDirection:'row',marginTop:60,marginLeft:15,marginBottom:160}}>
        <Text style={styles.Heading}>Gallery</Text>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginLeft:15}}>
        <Text style={styles.Headings}>To Understand, what our</Text>
        <Text style={styles.Headings1}>lives mean to us.</Text>
        </View>
        <View style={{marginBottom:5,marginTop:15}}>
            <Text style={styles.sHeading}>Posted on : 12-Jan-2023</Text>
            <Image style={{maxHeight:width,width:width,resizeMode:'contain',marginTop:20}} source={TodayPost}/>
            <Text style={styles.sHeading1}>"Nobody can educate you or transform you spiritually. There is no other teacher but your own soul." - SWAMI VIVEKANANDA 
            Swami Vivekananda revitalised India's pious heritage, gathered together all the beliefs of diverse ethnic groups, and served as an inspiration for all the humanity. The youth has an eternal hunger to showcase their abilities just like a young bird eagerly waiting to spread its wings in the limitless sky of freedom and hope.
            On this National Youth Day, let's honour Swami Vivekananda's moral principles while incorporating his enchanting objectives worldwide.
            Happy National Youth Day!</Text>
        </View>
        <View style={{marginBottom:-920}}></View>
        <Image style={styles.image}source={RouteMap} />
            <Footer/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Gallery

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#152739',
    },
    GalImg:{
        top:25,
        width:'70%',
        height:'13%',
        position:'absolute',
        left:105,
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
       sHeading:{
        fontSize:18,
        marginTop:20,
        color:'white',
        fontWeight:'bold',
        marginLeft:15,
    },
    image:{
        width:400,
        height:180,
        marginTop:30
    },
    sHeading1:{
        fontSize:14,
        marginTop:20,
        color:'white',
        fontWeight:'bold',
        marginLeft:5,
        width:'95%',
        textAlign:'center'
    },
    
})