import { StyleSheet, Text, View,Image, Button, Animated } from 'react-native';
import React from 'react'
import { Appbar,FAB,useTheme } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import logo from "../../../assets/iste.png";
import { Navigation } from 'react-native-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const nav = useNavigation();
  return (
    <Appbar style={styles.appbar}>
    <View style={styles.left}>
    <Image style={styles.logo} source={logo}/>
    <Text style={{color:'white',fontSize:20}}>SRKRISTE</Text>
    </View>
    <TouchableOpacity onPress={()=>nav.openDrawer()}>
    <MaterialCommunityIcons name='menu' color={'darkorange'} size={30}/>
    </TouchableOpacity>
    </Appbar>
  )
}

export default Header;

const styles = StyleSheet.create({
    appbar: {
        alignItems: 'center', 
        justifyContent:'space-between', 
        height: 60, 
        paddingVertical: 0, 
        paddingHorizontal: 8,
        backgroundColor: '#152739',
        overflowX: 'auto',
        marginTop:-5,
      },
      left: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'flex-start',
      },
      logo:{
        resizeMode:'center',
        width:60,
        
    },
})