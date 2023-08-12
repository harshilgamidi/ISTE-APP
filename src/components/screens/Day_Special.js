import { StyleSheet, Text, View,Image, Button, Animated ,Dimensions} from 'react-native';
import React from 'react';
import { Linking } from 'react-native';
import logo from "../../../assets/iste.png";
import RouteMap from '../../../assets/RouteMap.png';
import Day_SpecialImg from './../../../assets/Days_Special.png';
import TodayPost from "./../../../assets/Today's_Post.jpg";
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
import 'react-native-gesture-handler';
import Footer from './Footer';
import Header from './Header';
import MainVideo from './MainVideo';

const Day_Special = () => {
    const {width} = Dimensions.get('window');
  return (
    <SafeAreaView style = {styles.container}>
      <Header />
      <ScrollView>
      <Image style={styles.DaySpecialImg}source={Day_SpecialImg}/>
      <View style={{display:'flex',flexDirection:'column',marginTop:50,marginLeft:15,marginBottom:160}}>
        <Text style={styles.Heading}>Day's</Text>
        <Text style={styles.Heading1}>  Special</Text>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginLeft:15}}>
        <Text style={styles.Headings}>Each Day may not be</Text>
        <Text style={styles.Headings1}> Important,</Text>
        </View>
        <Text style={styles.Headingss}>But there are some days</Text>
        <Text style={styles.Headings11}>need to be remember!</Text>
        <View style={{display:'flex',flexDirection:'row',marginTop:50,marginLeft:15,marginBottom:10}}>
        <Text style={styles.Headingg}>Today's</Text>
        <Text style={styles.Heading1}> Post</Text>
        </View>
        <Image style={{maxHeight:width,width:width,resizeMode:'contain',marginTop:10}} source={TodayPost}/>
        <Text style={styles.sHeading}>"Nobody can educate you or transform you spiritually. There is no other teacher but your own soul." - SWAMI VIVEKANANDA 
Swami Vivekananda revitalised India's pious heritage, gathered together all the beliefs of diverse ethnic groups, and served as an inspiration for all the humanity. The youth has an eternal hunger to showcase their abilities just like a young bird eagerly waiting to spread its wings in the limitless sky of freedom and hope.
On this National Youth Day, let's honour Swami Vivekananda's moral principles while incorporating his enchanting objectives worldwide.
Happy National Youth Day!</Text>
<View style={{width:100}}>
    <TouchableOpacity>
            <Text style={{color:'darkorange',textDecorationLine:'underline',marginLeft:15,marginTop:15,fontWeight:'bold'}}>Learn More</Text>
        </TouchableOpacity>
        </View>
       
        <Image style={styles.image}source={RouteMap} />
        <Footer/>
        <View style={{marginBottom:-920}}></View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Day_Special;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#152739',
     },
     DaySpecialImg:{
        top:0,
        width:'65%',
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
        fontSize:14,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        width:'100%',
        marginTop:15,
      },
      image:{
        width:400,
        height:180,
        marginTop:30,
        marginBottom:0,
      },
      Headingg:{
        fontSize:45,
        color:'white',
        marginLeft:35,
        fontWeight:'bold',
    },
})