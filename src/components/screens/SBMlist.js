import { StyleSheet, Text, View,Image, Button, Animated,Dimensions} from 'react-native';
import React from 'react';
import { Linking } from 'react-native';
import logo from "../../../assets/iste.png";
import RouteMap from '../../../assets/RouteMap.png';
import HomePageImage from '../../../assets/HomePage.png';
import bg from "../../../assets/Bg.jpg";
import { useNavigation } from '@react-navigation/native';
import { button1 } from './Common/Button';
import AakashAnna from './../../../assets/AakashAnnaya.png';
import DineshAnna from './../../../assets/DineshAnnaya.png';
import VamsiAnna from './../../../assets/VamsiAnna.png';
import MarksAnna from './../../../assets/MarksAnnaya.png';
import ManasaAkka from './../../../assets/ManasaAkka.png';
import TarunAnna from './../../../assets/TarunAnnaya.png';
import SatyaAkka from './../../../assets/SatyaAkka.png';
import DurgaAkka from './../../../assets/DurgaAkka.png';
import jahnaviAkka from './../../../assets/jahnaviAkka.png';
import ThanujAnnaya from './../../../assets/ThanujAnnaya.png';
import HarshaAnnaya from './../../../assets/HarshaAnnaya.png';
import SravaniAkka from './../../../assets/SravaniAkka.png';
import SaiAnnaya from './../../../assets/SaiAnnaya.png';
import VinayAnnaya from './../../../assets/VinayAnnaya.png';
import SrinivasAnnaya from './../../../assets/SrinivasAnnaya.png';
import RaniAkka from './../../../assets/RaniAkka.png';
import SruthiAkka from './../../../assets/SruthiAkka.png';
import LogIn from './LogIn';
import { useState } from 'react';
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Appbar,FAB,useTheme } from 'react-native-paper';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacitym } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from './Footer';
import Header from './Header';

const SBMlist = () => {
    const {width} = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        <ScrollView>
        <View style={{display:'flex',flexDirection:'row',marginTop:60,marginLeft:5,marginBottom:160}}>
        <Text style={styles.Heading}>Senior Body</Text>
        <Text style={styles.Heading1}> Members</Text>
        </View>
        <View>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={AakashAnna}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>V. SRINIVASA AAKASH</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>CSE</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91A05P7</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>9494025467</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>aakashvasimalli@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={DineshAnna}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>K.DINESH</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>IT</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>18B91A1253</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>6302536043</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>dineshkarri9@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={VamsiAnna}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>P. CHARAN VAMSI</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>ECE</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91A0410</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>8918592834</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>charanvamsi25@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={MarksAnna}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>CH. WILLIAM MARKS</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>CIVIL</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91A0129</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>7382493827</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>williammarkschilakapati@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={ManasaAkka}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>K. MANASA</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>CSE</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91A0591</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>8341346765</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>kalidindi.manasa2002@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={TarunAnna}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>Y. TARUN TEJA</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>CSE</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91B0564</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>9391128383</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>tarunttt35@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={SatyaAkka}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>K.J.N.S MAHALAKSHMI</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>CSE</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91A05C0</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>8341454907</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>kjnsmahalakshmi@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        
        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={DurgaAkka}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>G. DURGA NAGA SRI</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>IT</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91A1251</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>7995886489</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>durganagasri2002@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={jahnaviAkka}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>K.J.S DHANASRI</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>CSE</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91A05B7</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>9912069869</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>konisettijahnavi111@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={ThanujAnnaya}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>B. THANUJ</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>CIVIL</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91A0121</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>9696969268</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>thanujkarthikeya@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={HarshaAnnaya}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>K. HARSHA VARDHAN</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>MECHANICAL</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91A03C0</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>9492810451</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>harshavardha.korada5269@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={SravaniAkka}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>S. SRAVANI</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>CIVIL</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91A01F6</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>9963764349</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>sravanibtech76@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={SaiAnnaya}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>T. NAGASAI</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>ELECTRICAL</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91A02J9</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>7330941025</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>nagasaitalasila1013@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={VinayAnnaya}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>D. DURGA VINAY</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>CSE</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91B0513</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>9390691090</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>vinaydonthamsetty@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={SrinivasAnnaya}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>G. SRINIVASU</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>ECE</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91A0471</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>9676941649</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>srinugudala2002@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={RaniAkka}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>K.BEULAH RANI</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>ELECTRICAL</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91A0277</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>7993170659</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>beulahrani659@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>

        <View style={{marginTop:-560}}>
        <Image style={{maxHeight:width,width:width,resizeMode:'cover',marginTop:-150}} source={SruthiAkka}/>
        <View style ={{display:'flex',flexDirection:'row',marginTop:15,marginLeft:10}}>
        <MaterialCommunityIcons  name='account' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>G.L.N.V SRUTHI</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='book-education-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>CSE</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='registered-trademark' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>19B91B0518</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='phone' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>9848348883</Text>
        </View>
        <View style ={{display:'flex',flexDirection:'row',marginTop:5,marginLeft:10}}>
        <MaterialCommunityIcons  name='email-outline' size={35} style={{color:'white',marginRight:10,marginLeft:8,marginTop:5}}/>
        <Text style={styles.Headings}>sruthi.gokavarapu@gmail.com</Text>
        </View>
        <Text style={{color:'white'}}>________________________________________________________</Text>
        </View>
        <Image style={styles.image}source={RouteMap} />
        <Footer/>
        </ScrollView>

    </SafeAreaView>
  )
}

export default SBMlist

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
        fontSize:35,
        color:'white',
        fontWeight:'bold',
        marginTop:5
    },
    Heading1:{
        fontSize:35,
        color:'darkorange',
        fontWeight:'b,marginTop:5old'
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
        marginTop:-680
    },
    Headings:{
        fontSize:17,
       marginTop:5,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
       },
       Headings1:{
        fontSize:35,
        color:'darkorange',
        fontWeight:'b,marginTop:5old'
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