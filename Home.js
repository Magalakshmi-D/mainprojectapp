import React, { useState } from 'react';
import { Text, View, Button, Image, StyleSheet, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel from './Carousel';

export default function Home({ navigation }) {
  const [common, setCommon] = useState(false);
  const openDrawer = () => {
    navigation.openDrawer();

  };
  // const prebutton = () => {
  //   console.log('device');
  // }
  return (
    <ImageBackground
      source={require('./src/assets/image/launch_screen.jpg')}
      style={styles.backgroundImage}
    >
      {/* rgba(256,256,256,0.0) */}
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {/* <StatusBar translucent backgroundColor="black"/> */}
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
          <Carousel />
        </View>
        {/* <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('./src/assets/image/soniclogo.png')} style={{ marginLeft: 0, marginTop: 0, width: 330, height: 65 }} />
          {/* <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'white', }}> Welcome </Text> */}
        {/* </View> */}
        {/* 3a6995 */}
        <View style={{ flex: 2, alignItems: 'center' }}>

          <View style={{ flexDirection: 'row', marginTop: 50, backgroundColor: 'white', width: 333, height: 70, justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderTopLeftRadius: 5, borderTopRightRadius: 5, borderWidth: 1 }}>
            <Text style={{ marginLeft: 10, marginRight: 20 }}><MaterialIcons name={'devices-other'} size={30} color={'#0366b1'} /></Text>
            <Text style={{ marginLeft: 30, marginRight: 40, color: 'black', fontSize: 18 }}>System</Text>
            <TouchableOpacity onPress={() => navigation.navigate("System")}>
              <Text style={{ marginLeft: 70 }}><AntDesign name={'right'} size={28} color={'black'} /></Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: 'white', width: 333, height: 70, justifyContent: 'center', alignItems: 'center', borderColor: 'white', }}>
            <Text style={{ marginLeft: 10, marginRight: 20 }}><MaterialIcons name={'data-usage'} size={30} color={'#0366b1'} /></Text>
            <Text style={{ marginLeft: 25, marginRight: 40, color: 'black', fontSize: 18 }}>Common</Text>
            <TouchableOpacity onPress={openDrawer}>
              <Text style={{ marginLeft: 60 }}><AntDesign name={'right'} size={28} color={'black'} /></Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: 'white', width: 333, height: 70, justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderBottomLeftRadius: 5, borderBottomRightRadius: 5, borderWidth: 1 }}>
            <Text style={{ marginLeft: 20, marginRight: 20 }}><MaterialIcons name={'important-devices'} size={30} color={'#0366b1'} /></Text>
            <Text style={{ marginLeft: 20, marginRight: 40, color: 'black', fontSize: 18 }}>Device</Text>
            <TouchableOpacity onPress={openDrawer}>
              <Text style={{ marginLeft: 80 }}><AntDesign name={'right'} size={28} color={'black'} /></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    opacity: 1.0
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  }
})