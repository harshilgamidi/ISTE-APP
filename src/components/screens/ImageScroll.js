import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TimedSlideshow from 'react-native-timed-slideshow';


const ImageScroll = ({navigation}) => {
    const items = [
        {
            uri:require('./../../../assets/sahara4.jpg'),
            title: "Sahara Visit",
            text:'We had conducted this event for the children.'
        },
        {
            uri:require('./../../../assets/sahara2.jpg'),
            title: "Sahara Visit",
        },
        {
            uri:require('./../../../assets/sahara4.jpg'),
            title: "Mary Gomes",
        }
    ]
  return (
    <TimedSlideshow
    items={items}
    slideDirection='right'
    duration={10000}
    fullWidth='false'
    onClose={()=>navigation.navigate('AboutUs')}
    />
  )
}

export default ImageScroll;

const styles = StyleSheet.create({})