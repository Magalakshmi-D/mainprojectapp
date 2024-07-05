import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, StatusBar, ImageBackground } from 'react-native';

const PreConfiguration = () => {
  return (
    <ImageBackground
      source={require('./src/assets/image/back3.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* <StatusBar translucent backgroundColor="transparent"/>  */}
        {/* <Text style={{color:'black',fontSize:23,fontWeight:'300',marginBottom:20}}>PreConfiguration</Text> */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText}>Hign Power</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText}>Medium Power</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button3}>
            <Text style={styles.buttonText}>Low Power</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button4}>
            <Text style={styles.buttonText}>Custom</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    opacity: 0.9
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'white'  //312b46
  },
  row: {
    flexDirection: 'row',
  },
  button1: {
    // flex: 1,
    width: 100,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',  //#32b491
    height: 80,
    borderRadius: 10,
  },
  button2: {
    // flex: 1,
    width: 100,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', //#78c6cc
    height: 80,
    borderRadius: 10,
  },
  button3: {
    // flex: 1,
    width: 100,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 80,
    borderRadius: 10,
  },
  button4: {
    // flex: 1,
    width: 100,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', //32b491
    height: 80,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});


export default PreConfiguration;