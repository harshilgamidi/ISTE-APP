import { StyleSheet,View,Image, Animated ,Dimensions, TouchableHighlight, TouchableOpacity} from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar,Title,Caption,Paragraph,Drawer,TouchableRipple,Text,Switch,Button} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {launchImageLibrary} from 'react-native-image-picker';
import logo from "../../../assets/iste.png";
import { useState,useEffect } from 'react';



export function DrawerContent(props){
    const [user,setUser] = useState({})
      
    useEffect(()=>{
        fetch('http://192.168.136.149:5000/users/GetDetails').then(res => res.json()).then(data=>setUser(data)).then(console.log(user)).catch(err => console.log(err))
      },[])

    return (
        <View style ={{flex:1,backgroundColor:'darkorange'}}>
           <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop:15}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('AboutUs')}>
                    <Avatar.Image size={65} source={require('../../../assets/iste.png')} />
                       </TouchableOpacity>
                            <View style={{flexDirection:'column',marginLeft:15}}>
                            <Title style={styles.title}>{user.FullName}</Title>
                            <Caption style={styles.caption}>{user.email}</Caption>
                        </View>
                    </View>
                </View>
            </View>
            <Drawer.Section style={styles.drawerSection}>
            <DrawerItem  
             icon={(size) => (
                <Icon 
                name="home" 
                color={'white'}
                size={30}
                />
            )}
            label='Home'
            onPress={()=>props.navigation.navigate('Home')}/>
            <DrawerItem  
             icon={({size}) => (
                <Icon 
                name="clock-alert-outline" 
                color={'white'}
                size={30}
                />
            )}
            label='Events'
            onPress={()=>props.navigation.navigate('Events')}/>
            <DrawerItem  
             icon={({size}) => (
                <Icon 
                name='calendar-check'
                color={'white'}
                size={30}
                />
            )}
            label="Day's Special"
            onPress={()=>props.navigation.navigate("Day_Special")}/>
            <DrawerItem  
             icon={({size}) => (
                <Icon 
                name="bell-check" 
                color={'white'}
                size={30}
                />
            )}
            label='Nipuna'
            onPress={()=>props.navigation.navigate('Nipuna')}/>
            <DrawerItem  
             icon={({size}) => (
                <Icon 
                name="account-group" 
                color={'white'}
                size={30}
                />
            )}
            label='About Team'
            onPress={()=>props.navigation.navigate('Team')}/>
            <DrawerItem  
             icon={({size}) => (
                <Icon 
                name="checkbook" 
                color={'white'}
                size={30}
                />
            )}
            label='MemberShip'
            onPress={()=>props.navigation.navigate('MemberShip')}/>
            <DrawerItem  
             icon={({size}) => (
                <Icon 
                name="image" 
                color={'white'}
                size={30}
                />
            )}
            label='Gallery'
            onPress={()=>props.navigation.navigate('Gallery')}/>
            <DrawerItem  
             icon={({size}) => (
                <Icon 
                name="account-alert" 
                color={'white'}
                size={30}
                />
            )}
            label='About Us' 
            onPress={()=>props.navigation.navigate('AboutUs')}/>
            </Drawer.Section>
           </DrawerContentScrollView>
           <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem  
             icon={({size}) => (
                <Icon 
                name="exit-to-app" 
                color={'white'}
                size={30}
                />
            )}
            label='Sign Out'
            onPress={()=>{props.navigation.navigate('Welcome')}}/>
           </Drawer.Section>
        </View>
    )
}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        marginTop:-40,
        paddingLeft: 20,
        paddingBottom:20,
        borderBottomEndRadius:30,
        paddingTop:40
,        backgroundColor:'#152739',
      },
      title: {
        fontSize: 16,
        color:'white',
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 12,
        lineHeight: 14,
        color:'white'
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
})