import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from './src/components/screens/Welcome';
import { SafeAreaView } from 'react-native-safe-area-context';
import LogIn from './src/components/screens/LogIn';
import Signup from './src/components/screens/Signup';
import { useState } from 'react';
import ForgetPassword from './src/components/screens/ForgetPassword';
import OTP from './src/components/screens/OTP';
import NewPassword from './src/components/screens/NewPassword';
import HomePage from './src/components/screens/HomePage';
import Events from './src/components/screens/Events';
import MainVideo from './src/components/screens/MainVideo';
import AboutUs from './src/components/screens/AboutUs';
import Day_Special from './src/components/screens/Day_Special';
import MemberShip from './src/components/screens/MemberShip';
import Team from './src/components/screens/Team';
import Videos from './src/components/screens/Videos';
import Gallery from './src/components/screens/Gallery';
import { DrawerContent } from './src/components/screens/DrawerContent';
import SBMlist from './src/components/screens/SBMlist';
import ImageScroll from './src/components/screens/ImageScroll';
import PaymentPage from './src/components/screens/PaymentPage';
import Nipuna from './src/components/screens/Nipuna';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



function DrawerRoutes()
{
  return(
    <Drawer.Navigator screenOptions={{headerShown:false}} initialRouteName='Home' drawerContent={props=><DrawerContent{...props}/>}>
      <Drawer.Screen name="Home" component={HomePage}/>
      <Drawer.Screen name="Events" component={Events}/>
      <Drawer.Screen name="Day_Special" component={Day_Special}/>
      <Drawer.Screen name="Nipuna" component={Nipuna}/>
      <Drawer.Screen name="Team" component={Team}/>
      <Drawer.Screen name="MemberShip" component={MemberShip}/>
      <Drawer.Screen name="Gallery" component={Gallery}/>
      <Drawer.Screen name="AboutUs" component={AboutUs}/>
      <Drawer.Screen name="SBMlist" component={SBMlist}/>
      <Drawer.Screen name="PaymentPage" component={PaymentPage}/>
      <Drawer.Screen name="ImageScroll" component={ImageScroll}/>
    </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{headerShown:false}}>
      {/*<Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={LogIn}/>
      <Stack.Screen name = "Signup" component={Signup}/>
      <Stack.Screen name = "Forgetpassword" component= {ForgetPassword}/>
      <Stack.Screen name= "OTP" component={OTP}/> 
      <Stack.Screen name="NewPassword" component={NewPassword}/>*/}
      <Stack.Screen name="HomePage" component={DrawerRoutes}/>
    </Stack.Navigator>
    </NavigationContainer>
  
  );

  
  
}




