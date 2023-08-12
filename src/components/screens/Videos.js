import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'
import { Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';
import Footer from './Footer';


const Videos = () => {
    const video = useRef(null);
    const [status,setStatus] = useState({});
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop:20}}>
      <Header/>
      </View>
       <Video 
       ref={video}
       style={styles.video}
       source={require("./../../../assets/Copy_of_musemvideo.mp4")}
       useNativeControls
       resizeMode='contain'
       isLooping
       onPlaybackStatusUpdate={setStatus}
         />
    <StatusBar style="auto" />
    <Footer/>
    </SafeAreaView>
  )
}

export default Videos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#152739',
        alignItems: 'center',
        justifyContent: 'center',
      },
      video: {
    flex:1,
    alignSelf: 'stretch'
  },
})