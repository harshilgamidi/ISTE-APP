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
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Appbar,FAB,useTheme } from 'react-native-paper';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from './Footer';
import Header from './Header';
import MainVideo from './MainVideo';


const HomePage = ({navigation}) => {
    
  return (
        <SafeAreaView style={styles.container}>
        <Header/>
        <ScrollView>
        <Image style={styles.HomePage}source={HomePageImage}/>
        <View style={{display:'flex',flexDirection:'row',marginTop:60,marginLeft:15}}>
        <Text style={styles.Heading}>The</Text>
        <Text style={styles.Heading1}> New</Text>
        </View>
        <Text style={styles.Heading3}>Development</Text>
        <View style={{display:'flex',flexDirection:'row',marginTop:160,marginLeft:15}}>
        <Text style={styles.Headings}>If your actions </Text>
        <Text style={styles.Headings1}>inspire</Text>
        </View>
        <Text style={styles.Headings11}>others</Text>
        <Text style={styles.Headingss}>to dream more, learn more,</Text>
        <Text style={styles.Headingss}>do more, and become</Text>
        <View style={{display:'flex',flexDirection:'row',marginLeft:15}}>
        <Text style={styles.Headings}>more,</Text>
        <Text style={styles.Headings1}> you are a leader.</Text>
        </View>
        <Image source={logo} style={{resizeMode:'center',marginTop:-100,marginLeft:-50}}/>
        <Text style={styles.MHeading}>Indian Society For</Text>
        <Text style={styles.SHeading}>Technical Education</Text>
        <View style={{marginTop:25,marginBottom:25}}>
            <Text style={styles.sHeading}>The Indian Society for Technical Education(ISTE) is</Text>
            <Text style={styles.sHeading}>the leading National Professional non-profit</Text>
            <Text style={styles.sHeading}>making Society for Technical Education System.</Text>
            <Text style={styles.sHeading}>in our country with the motto of Career Development</Text>
            <Text style={styles.sHeading}>of Teachers and Personality Development of</Text>
            <Text style={styles.sHeading}>Students and overall development of our Technical</Text>
            <Text style={styles.sHeading}>Education System.</Text>
        </View>
        <MainVideo/>
        <TouchableOpacity onPress={()=>navigation.navigate('AboutUs')}>
            <Text style={{color:'darkorange',textDecorationLine:'underline',marginLeft:15,marginTop:15,fontWeight:'bold'}}>Learn More</Text>
        </TouchableOpacity>
        <Image style={styles.image}source={RouteMap} />
        <Footer/>
        </ScrollView>
        </SafeAreaView>
  )
}

export default HomePage;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#152739',
    },
    
      left: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'flex-start',
      },
      button: {
        height: 30, 
        alignSelf: 'center', 
        marginRight: 16
      },
      logo:{
        resizeMode:'center',
        width:60,
        
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
    Heading3:{
        fontSize:45,
        color:'white',
        fontWeight:'bold',
        marginTop:-15,
        marginLeft:15
    },
   HomePage:{
    top:0,
    width:'65%',
    height:'19%',
    position:'absolute',
    left:115,
    zIndex:-1
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
   MHeading:{
    fontSize:38,
    marginTop:-150,
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
},SHeading:{
    fontSize:38,
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
},
sHeading:{
    fontSize:14,
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
},
image:{
    width:400,
    height:180,
    marginTop:30
},

})