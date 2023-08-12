import { StyleSheet, Text, View,Image, Button, Animated ,Dimensions} from 'react-native';
import React from 'react';
import { Linking } from 'react-native';
import logo from "../../../assets/iste.png";
import Event2 from './../../../assets/Event2.webp';
import Event3 from './../../../assets/Event3.webp';
import RouteMap from '../../../assets/RouteMap.png';
import exodus from './../../../assets/exodus.jpg';
import Inscape from './../../../assets/Inscape.jpg';
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
import NipunaImg from './../../../assets/NipunaImg.png';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from './Footer';
import Header from './Header';
import MainVideo from './MainVideo';

const Nipuna = () => {
    const {width} = Dimensions.get('window');
  return (
    <SafeAreaView style ={styles.container}>
        <Header/>
        <ScrollView>
        <Image style={styles.GalImg}source={NipunaImg}/>
        <View style={{display:'flex',flexDirection:'column',marginTop:60,marginLeft:15,marginBottom:160}}>
        <Text style={styles.Heading}>NIPUNA</Text>
        <Text style={styles.Heading1}>Biggest Tech Fest!</Text>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginLeft:12,marginBottom:10,alignContent:'center'}}>
            <Text style={styles.Headings}>Every year, Iste organizes</Text>
            <Text style={styles.Headings1}>Nipuna- a national level techno management symposium</Text>
        </View>
        <MainVideo/>
        <View style={{display:'flex',flexDirection:'column',marginTop:15,marginLeft:12,marginBottom:10}}>
            <Text style={styles.imp}>nipuna consists of events from various categories such as managerial events, presentation events, technical events, artistic events, and core engineering events.
            Participating in nipuna can increase your exposure and those certificates will add value to your resume.</Text>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginTop:15,marginLeft:12,marginBottom:10}}>
            <Text style={styles.imp}>Nipuna organizes many events weekly events like in technical and non technical fields some of the events are jam, click o mania, endaze , exodus, inception, manadate. By participating in these events one can improve their technical and communication skills. One can get the technical knowledge through the classess but we can get practical skills by applying them in these events. Students by participating in these events can overcome their fears and enhance their skills. Students also will be awarded with certification and this certification adds a huge value to their resume.</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',marginTop:50,marginLeft:15,marginBottom:10}}>
        <Text style={styles.Headings}>List of</Text>
        <Text style={styles.Headings1}> Events</Text>
        </View>
        <Image style={{maxHeight:width,width:width,resizeMode:'contain',marginTop:-50}} source={exodus}/>
        <View style={{display:'flex',flexDirection:'row',marginTop:-50,marginLeft:3,marginBottom:10}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',height:250,width:'48%'}} source={Event3}/>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',height:250,width:'52%'}} source={Event2}/>
        </View>
        <Image style={{maxHeight:width,width:width,resizeMode:'contain',marginTop:-40,marginBottom:-50}} source={Inscape}/>
        <View style={{width:150}}>
    <TouchableOpacity>
            <Text style={{color:'darkorange',textDecorationLine:'underline',marginLeft:15,marginTop:15,fontWeight:'bold',fontSize:17}}>Learn More</Text>
        </TouchableOpacity>
        </View>
        <Image style={styles.image}source={RouteMap} />
            <Footer/>
            <View style={{marginBottom:-1220}}></View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Nipuna

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#152739',
    },
    GalImg:{
        top:25,
        width:'75%',
        height:'10%',
        position:'absolute',
        left:110,
        zIndex:-1
     },
     Heading:{
        fontSize:45,
        color:'white',
        fontWeight:'bold',
    },
    Heading1:{
        fontSize:28,
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
        fontWeight:'bold',
        marginTop:-2
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
    imp:{
        fontSize:14,
        marginLeft:5,
        color:'white',
        fontWeight:'bold',
       },
       Headingg:{
        fontSize:45,
        color:'white',
        marginLeft:35,
        fontWeight:'bold',
    },
    
})