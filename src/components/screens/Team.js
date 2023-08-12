import { StyleSheet, Text, View,Image, Button, Animated } from 'react-native';
import React, { useRef } from 'react';
import { Linking } from 'react-native';
import logo from "../../../assets/iste.png";
import RouteMap from '../../../assets/RouteMap.png';
import HomePageImage from '../../../assets/HomePage.png';
import bg from "../../../assets/Bg.jpg";
import { useNavigation } from '@react-navigation/native';
import { button1 } from './Common/Button';
import LogIn from './LogIn';
import { useState } from 'react';
import Teamup from './../../../assets/Teamup.mp4';
import Teaming from './../../../assets/Team.png';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Appbar,FAB,useTheme } from 'react-native-paper';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Video} from 'expo-av';
import Footer from './Footer';
import Teams from './../../../assets/Teams.png';
import Header from './Header';
import Videos from './Videos';
import MainVideo from './MainVideo';

const Team = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
     <Header/>
     <ScrollView>
     <Image style={styles.aboutTeams}source={Teams}/>
     <View style={{display:'flex',flexDirection:'column',marginTop:60,marginLeft:15,marginBottom:70}}>
        <Text style={styles.Heading}>ABOUT</Text>
        <Text style={styles.Heading1}>    TEAMS</Text>
    </View>
    <View style={{display:'flex',flexDirection:'column',marginLeft:15}}>
        <Text style={styles.Headings}>Talent wins games, but</Text>
        <Text style={styles.Headings1}> teamwork and intelligence</Text>
        <Text style={styles.Headings}> win championships.</Text>
        </View>
        <Image style={styles.TeamingUp}source={Teaming}/>
        <Text style={styles.Headingss}>SBM's of SRKRISTE</Text>
        <View style={{marginTop:15,width:200}}>
        <TouchableOpacity onPress={()=>navigation.navigate('SBMlist')}>
        <Text style={{fontSize:20,backgroundColor:'darkorange',width:120,borderRadius:20,paddingLeft:35,paddingBottom:7,paddingTop:7,color:'white',fontWeight:'bold',marginLeft:120}}>VIEW</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.Headingss1}>EBM's of SRKRISTE</Text>
        <View style={{marginTop:15,width:200}}>
        <TouchableOpacity>
        <Text style={{fontSize:20,backgroundColor:'darkorange',width:120,borderRadius:20,paddingLeft:35,paddingBottom:7,paddingTop:7,color:'white',fontWeight:'bold',marginLeft:120}}>VIEW</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity>
            <Text style={{color:'darkorange',textDecorationLine:'underline',marginLeft:15,marginTop:15,fontWeight:'bold'}}>Learn More</Text>
        </TouchableOpacity>
        </View>
        <Image style={styles.image}source={RouteMap} />
        <Footer/>
     </ScrollView>
    </SafeAreaView>
  )
}

export default Team;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#152739',
    },
    aboutTeams:{
        top:25,
        width:'68%',
        height:'14%',
        position:'absolute',
        left:115,
        zIndex:-1
     },
     Heading:{
        fontSize:45,
        color:'white',
        fontWeight:'bold',
        marginLeft:5,
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
    fontSize:28,
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
        marginTop:360,
        fontSize:36,
        marginLeft:15,
        color:'white',
        fontWeight:'bold',
       },
       TeamingUp:{
        top:390,
        width:'90%',
        height:'21%',
        position:'absolute',
        left:15,
        zIndex:-1
     },
     Headingss1:{
        marginTop:50,
        fontSize:36,
        marginLeft:15,
        color:'white',
        fontWeight:'bold',
       },
       image:{
        width:400,
        height:180,
        marginTop:30
    },
    
})