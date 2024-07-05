import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const Back = () => {
    return (
      <ImageBackground
        source={require('./src/assets/image/background2.jpg')}
        style={styles.backgroundImage}
      >
       
        <View style={styles.content}>
          <Text style={styles.text}>Hello, Background Image!</Text>
        </View>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    backgroundImage: {
      flex:1,
      opacity:0.9
      
    },
    content: {
      // Additional styling for your content if needed
    },
    text: {
      fontSize: 24,
      color: 'white',
    },
  });
  
export default Back;