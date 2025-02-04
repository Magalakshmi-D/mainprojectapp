import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Button, Modal, TouchableOpacity, ImageBackground,Image } from 'react-native';
import data from './android/app/src/main/assets/proconfig.json';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function System() {
  const data_one = data.system;
  const [data_two, setDataTwo] = useState(data_one);
  console.log(data_two, 'data two');
  const [showwarning, setShowwarning] = useState(false);
  const datas = ["true", "false"];
  const [selectedItem1, setSelectedItem1] = useState(datas[0]);
  const [selectedItem2, setSelectedItem2] = useState(datas[0]);
  const [autoData, setAutoData] = useState('');
  const handleItemChange1 = (itemValue) => {
    setSelectedItem1(itemValue);
  };
  const handleItemChange2 = (itemValue) => {
    setSelectedItem2(itemValue);
  };

  const edit = () => {
    console.log('edit');
    setShowwarning(true);
  }
  const submit = (selectedItem1, selectedItem2, autoData) => {
    console.log('submit', selectedItem1, selectedItem2, autoData);
    setSelectedItem1(datas[0]);
    setSelectedItem2(datas[0]);
    setAutoData('');
    setShowwarning(false);
    const updatedata = { ...data_two, "system_enable": selectedItem1, "system_fault": selectedItem2, "auto_recovery_time_min": autoData };
    console.log(updatedata, 'update data');
    setDataTwo(updatedata);
  }
  function convertToTitleCase(str) {
    const words = str.split('_');
    const titleCaseStr = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return titleCaseStr;
  }

  const [editdata1,setEditData1]=useState(false);
  return (
    <ImageBackground
      source={require('./src/assets/image/back3.jpg')}
      style={styles.backgroundImage}
    >
    <View>
      <Modal visible={showwarning} transparent onRequestClose={() => setShowwarning(false)} animationType='slide' >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <TouchableOpacity onPress={() => setShowwarning(false)}>
              <Text style={{ paddingLeft: 2, marginTop: 4, marginLeft: 310, color: 'black', width: 30, textAlign: 'center', borderRadius: 2, borderWidth: 1, borderColor: 'black' }}>X</Text>
            </TouchableOpacity>
            <Text style={{ marginBottom: 20, fontSize: 23, color: '#0b5394', fontWeight: 'bold' }}>Update</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 10, fontSize: 15 }}>System Enable: </Text>
              <View style={styles.pickerBorder}>
                <Picker
                  selectedValue={selectedItem1}
                  onValueChange={(itemValue) => handleItemChange1(itemValue)}
                >
                  {datas.map((item, index) => (
                    <Picker.Item key={index} label={item} value={item} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 22, fontSize: 15 }}>System Fault: </Text>
              <View style={styles.pickerBorder}>
                <Picker
                  selectedValue={selectedItem2}
                  onValueChange={(itemValue) => handleItemChange2(itemValue)}
                >
                  {datas.map((item, index) => (
                    <Picker.Item key={index} label={item} value={item} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Auto Recovery time in Minutes:</Text>
              <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4' }} placeholder='Enter' value={autoData} onChangeText={(value) => setAutoData(value)} />
            </View>
            <Pressable style={{ borderRadius: 4, backgroundColor: '#539ed6', padding: 5, marginTop: 10, width: 50, alignItems: 'center' }} onPress={() => submit(selectedItem1, selectedItem2, autoData)} >
              <Text style={{ padding: 5, color: 'white' }}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 25, marginLeft: 100, marginTop: 50, marginBottom: 20 }}>System</Text>
        {/* <TouchableOpacity style={styles.imageContainer} onPress={edit}>
          <Image source={require('./src/assets/image/edit-document.png')} style={styles.bluetoothImage} resizeMode="cover"></Image>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.imageContainer}>
        {editdata1 === true ?
         null :
          <AntDesign name={'edit'} size={25} color={'white'}
            marginRight={20}
            onPress={() => edit()}
          />}
        </TouchableOpacity>
        
      </View>
      <View style={styles.container}>
        {Object.entries(data_two).map(([key, value], index) => (
          <View key={key} style={styles.item}>
            <Text style={styles.keyText}>{convertToTitleCase(key)} </Text>
            <Text style={styles.valueText}>{String(value)}</Text>
          </View>
        ))}
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1
  },
  // container: {
  //   // Style the main container as per your requirements
  //   padding: 20,
  //   backgroundColor: '#e0e0e0',
  //   flexDirection: 'column',
  //   flexWrap: 'wrap',
  //   marginLeft: 50,
  //   marginRight: 50,
  //   marginTop: 100,
  //   borderRadius: 12
  // },
  // textContainer: {
  //   flexDirection: 'row',
  //   padding: 5,
  // },
  // editButton: {
  //   position: 'relative',
  //   top: 5,
  //   right: 5,
  //   backgroundColor: '#539ed6',
  //   marginLeft: 85,
  //   borderRadius: 5,
  //   width: 50
  // },
  // editButtonText: {
  //   fontSize: 15,
  //   fontWeight: 'bold',
  //   padding: 10,
  //   color: 'white'
  // },
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 20,
    // marginRight:20,
    backgroundColor: 'white',
    width: 350,
    borderRadius: 8
  },
  item: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 6
  },
  keyText: {
    marginRight: 15,
    flex: 0.7,
    fontWeight: 'bold',
    color: 'black'
  },
  valueText: {
    alignItems: 'flex-end',
    flex: 0.8,
    color:'black'
  },
  imageContainer: {
    marginLeft: 100,
    marginTop: 50,
    marginBottom: 20,
  },
  bluetoothImage: {
    width: 30,
    height: 30,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'

  },
  warning_modal: {
    width: 360,
    height: 330,
    backgroundColor: '#ffffff',
    // borderWidth:1,
    // borderColor:'#000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containers: {
    // flex: 1,
    padding: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  pickerBorder: {
    flex: 0.5,
    borderColor: 'gray', // Customize the border color here
    borderWidth: 1,      // Customize the border width here
    borderRadius: 4,     // Optional: Customize border radius to make it rounder
    overflow: 'hidden',  // Optional: Prevents the border from covering the dropdown arrow on iOS
    backgroundColor: '#f4f4f4'
  },
})