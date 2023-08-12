import { StyleSheet, Text, View,Image, Button, Animated,Dimensions} from 'react-native';
import React from 'react';
import { Linking } from 'react-native';
import logo from "../../../assets/iste.png";
import members from './../../../assets/members.png';
import apply from './../../../assets/apply.png';
import RouteMap from '../../../assets/RouteMap.png';
import HomePageImage from '../../../assets/HomePage.png';
import bg from "../../../assets/Bg.jpg";
import { useNavigation } from '@react-navigation/native';
import { button1 } from './Common/Button';
import LogIn from './LogIn';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Appbar,FAB,useTheme } from 'react-native-paper';
import IDcard from './../../../assets/IDcards.png';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from './Footer';
import Header from './Header';
const MemberShip = ({navigation}) => {
    const{width} = Dimensions.get('window')
  return (
    <SafeAreaView  style={styles.container}>
        <Header/>
        <ScrollView>
        <Image style={styles.aboutID}source={IDcard}/>
        <View style={{display:'flex',flexDirection:'column',marginTop:60,marginLeft:15,marginBottom:160}}>
        <Text style={styles.Heading}>About</Text>
        <Text style={styles.Heading1}>Membership</Text>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginTop:-90,marginLeft:15}}>
        <Text style={styles.Headings}>MEMBERSHIP has it's</Text>
        <Text style={styles.Headings1}> PRIVILEGES</Text>
        </View>
        <Image style={styles.members}source={members}/>
        <View style={{display:'flex',flexDirection:'row',marginTop:160,marginLeft:15,marginBottom:10}}>
        <Text style={styles.Headingg}>Advantages of </Text>
        <Text style={styles.Headings11}> MEMBERSHIP</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',marginTop:30,marginLeft:12,marginBottom:10,alignContent:'center'}}>
            <MaterialCommunityIcons  name='star' style={{marginTop:5,fontSize:18,color:'white'}}/>
            <Text style={styles.imp}>A member of a national professional society and Membership cards will be issued by ISTE, NEW DELHI.</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:12,marginBottom:10}}>
            <MaterialCommunityIcons  name='star' style={{marginTop:5,fontSize:18,color:'white'}}/>
            <Text style={styles.imp}>Opportunity to be a part of a 60,000 strong professional community.</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:12,marginBottom:10}}>
            <MaterialCommunityIcons  name='star' style={{marginTop:5,fontSize:18,color:'white'}}/>
            <Text style={styles.imp}>Preference to attend training programs for  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; technical excellence.</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:12,marginBottom:10}}>
            <MaterialCommunityIcons  name='star' style={{marginTop:5,fontSize:18,color:'white'}}/>
            <Text style={styles.imp}>Can participate in national level conventions and other ISTE 
            organized events at various prestigious institutions which includes 
            NITs and IITs.</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:12,marginBottom:10}}>
            <MaterialCommunityIcons  name='star' style={{marginTop:5,fontSize:18,color:'white'}}/>
            <Text style={styles.imp}>Can avail concession on the participation fee &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; during the annual fest 
        “NIPUNA”.</Text>
        </View>
        <Image style={styles.applying}source={apply}/>
        <View style={{marginTop:295,width:200}}>
        <TouchableOpacity onPress={()=>navigation.navigate('PaymentPage')}>
        <Text style={{fontSize:20,backgroundColor:'darkorange',width:120,borderRadius:20,paddingLeft:14,paddingBottom:7,paddingTop:7,color:'white',fontWeight:'bold',marginLeft:120}}>ApplyNow</Text>
        </TouchableOpacity>
        </View>
        <Image style={styles.image}source={RouteMap}/>
        <Footer/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default MemberShip

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#152739',
     },
     aboutID:{
        top:25,
        width:'78%',
        height:'10%',
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
        fontSize:25,
        marginTop:55,
        color:'darkorange',
        fontWeight:'bold'
    },
    Headingss:{
        fontSize:28,
        marginLeft:15,
        color:'white',
        fontWeight:'bold',
       },
       members:{
        top:335,
        width:'90%',
        height:'12%',
        position:'absolute',
        left:15,
        zIndex:-1
     },
     Headingg:{
        fontSize:25,
        color:'white',
        marginLeft:1,
        marginTop:55,
        fontWeight:'bold',
    },
    image:{
        width:400,
        height:180,
        marginTop:30
    },
    imp:{
        fontSize:14,
        marginLeft:5,
        color:'white',
        fontWeight:'bold',
       },
       applying:{
        top:920,
        width:'90%',
        height:'15%',
        position:'absolute',
        left:15,
        zIndex:-1
     },
   
})