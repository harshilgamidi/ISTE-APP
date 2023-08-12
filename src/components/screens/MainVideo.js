import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import YoutubePlayer from 'react-native-youtube-iframe';

const MainVideo = () => {
  return (
    <View>
        <YoutubePlayer 
        height={220}
        play={false}
        videoId={'V0adQQP6hnI'}/>
        
    </View>
  )
}

export default MainVideo;

const styles = StyleSheet.create({})