import { StyleSheet, Text, View,Image, Button, Animated ,Dimensions} from 'react-native';
import React from 'react';
import { Linking } from 'react-native';
import logo from "../../../assets/iste.png";
import RouteMap from '../../../assets/RouteMap.png';
import HomePageImage from '../../../assets/HomePage.png';
import Event2 from './../../../assets/Event2.webp';
import Event3 from './../../../assets/Event3.webp';
import MainVideo from './MainVideo';
import bg from "../../../assets/Bg.jpg";
import { useNavigation } from '@react-navigation/native';
import { button1 } from './Common/Button';
import LogIn from './LogIn';
import 'react-native-gesture-handler';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Appbar,FAB,useTheme } from 'react-native-paper';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EventImg from './../../../assets/Events.png';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from './Footer';
import Header from './Header';

const Events = () => {
  const {width} = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView>
      <Image style={styles.EventsImg}source={EventImg}/>
      <View style={{display:'flex',flexDirection:'column',marginTop:60,marginLeft:15,marginBottom:160}}>
        <Text style={styles.Heading}>About</Text>
        <Text style={styles.Heading1}>   Events</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',marginTop:0,marginLeft:15}}>
        <Text style={styles.Headings}>Showcase your </Text>
        <Text style={styles.Headings1}>Skillset,</Text>
        </View>
        <Text style={styles.Headingss}>to this world and Show </Text>
        <Text style={styles.Headingss1}>them who you are!</Text>
        <View>
        <Image style={{maxHeight:width,width:width,resizeMode:'contain',marginTop:30}} source={Event2}/>
        <Text style={styles.sHeading}>Every discovery has an eminent role with an impact, and certain discoveries have brought tremendous revolutions globally.
        Do you also have a path breaking creation that could revolutionise the world?
        Come and join us to unveil your own intellectual and innovative ideas in the arena of "MODEL MARATHON-SHAPE YOUR INSIGHTS," a project exposition that will introduce the real you to the real world.</Text>
        <TouchableOpacity style={{width:200}}>
        <Text style={{fontSize:20,backgroundColor:'darkorange',width:120,borderRadius:20,paddingLeft:14,paddingBottom:7,paddingTop:7,color:'white',fontWeight:'bold',marginTop:15,marginLeft:120}}>ApplyNow</Text>
        </TouchableOpacity>
        </View>
        <View>
        <Image style={{maxHeight:width,width:width,resizeMode:'contain',marginTop:-670}} source={Event3}/>
        <Text style={styles.sHeading}>It was a Friday night. The clock struck 12:00 a.m., everything was pitch black on the outskirts of the town, and a cold-blooded murder took place. The time has come to bring out the detectives in all of you, for there is a mystery on your doorstep. Everything around you may appear to be shady and misleading. Every single piece of information is crucial. As time goes by, as quick as a flash, anything can happen in the blink of an eye. Return to the past, acquire evidence, accomplish tasks, and solve the mystery to unravel the knots of such an unexpected incident by joining us in the event MYSTERY MANSION-UNLEASH THE TRUTH.</Text>
        <View style={{width:100}}>
        <TouchableOpacity style={{width:200}}>
        <Text style={{fontSize:20,backgroundColor:'darkorange',width:120,borderRadius:20,paddingLeft:14,paddingBottom:7,paddingTop:7,color:'white',fontWeight:'bold',marginTop:15,marginLeft:120}}>ApplyNow</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{marginTop:-670}}>
        <MainVideo/>
        <Image style={styles.image}source={RouteMap} />
        <Footer/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Events

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#152739',
 },
 EventsImg:{
  top:0,
  width:'70%',
  height:'12%',
  marginTop:25,
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
Headingss:{
  fontSize:28,
  color:'white',
  fontWeight:'bold',
  marginLeft:15,
 },
 Headingss1:{
  fontSize:30,
  color:'darkorange',
  fontWeight:'bold',
  marginLeft:15,
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
  marginTop:5,
  marginBottom:0,
},

})