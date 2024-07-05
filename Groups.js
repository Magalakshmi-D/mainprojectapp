import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView,ImageBackground } from 'react-native';
import example from './android/app/src/main/assets/proconfig.json';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Groups = () => {
  const data = example.common.groups;
  const data1 = data[0];
  // console.log(data1,'1');
  const objectEntries1 = Object.entries(data1);
  console.log(objectEntries1);
  const [group1, setGroup1] = useState(objectEntries1);
  const [editvalue1, setEditValue1] = useState(false);
  const [editedValues1, setEditedValues1] = useState(group1.map((item) => item[1]));
  const edit1 = () => {
    console.log('edit 1');
    setEditValue1(true);
  }
  const update1=()=>{
    console.log('update1');
    const updatedChannels = group1.map((item, index) => [item[0], editedValues1[index]]);
    setGroup1(updatedChannels);
    setEditValue1(false);
  }

  const data2 = data[1];
  // console.log(data1,'1');
  const objectEntries2 = Object.entries(data2);
  console.log(objectEntries2);
  const [group2, setGroup2] = useState(objectEntries2);
  const [editvalue2, setEditValue2] = useState(false);
  const [editedValues2, setEditedValues2] = useState(group2.map((item) => item[1]));
  const edit2 = () => {
    console.log('edit 2');
    setEditValue2(true);
  }
  const update2=()=>{
    console.log('update1');
    const updatedChannels = group2.map((item, index) => [item[0], editedValues2[index]]);
    setGroup2(updatedChannels);
    setEditValue2(false);
  }

  const data3 = data[2];
  // console.log(data1,'1');
  const objectEntries3 = Object.entries(data3);
  console.log(objectEntries3);
  const [group3, setGroup3] = useState(objectEntries3);
  const [editvalue3, setEditValue3] = useState(false);
  const [editedValues3, setEditedValues3] = useState(group3.map((item) => item[1]));
  const edit3 = () => {
    console.log('edit 3');
    setEditValue3(true);
  }
  const update3=()=>{
    console.log('update 3');
    const updatedChannels = group3.map((item, index) => [item[0], editedValues3[index]]);
    setGroup3(updatedChannels);
    setEditValue3(false);
  }

  const data4 = data[3];
  // console.log(data1,'1');
  const objectEntries4 = Object.entries(data4);
  console.log(objectEntries4);
  const [group4, setGroup4] = useState(objectEntries4);
  const [editvalue4, setEditValue4] = useState(false);
  const [editedValues4, setEditedValues4] = useState(group4.map((item) => item[1]));
  const edit4 = () => {
    console.log('edit 4');
    setEditValue4(true);
  }
  const update4=()=>{
    console.log('update4');
    const updatedChannels = group4.map((item, index) => [item[0], editedValues4[index]]);
    setGroup4(updatedChannels);
    setEditValue4(false);
  }

  function convertToTitleCase(str) {
    const words = str.split('_');
    const titleCaseStr = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return titleCaseStr;
  }

  return (
    <ImageBackground
        source={require('./src/assets/image/back3.jpg')}
        style={styles.backgroundImage}
      >
    <ScrollView>
      <View style={[styles.container,{width:360}]}>
        <TouchableOpacity style={{ alignItems: 'flex-end' }}>
          {editvalue1 === true ?
            <AntDesign name={'checkcircleo'} size={28} color={'green'}
            marginRight={20}
            onPress={() => update1()}
          /> :
             <AntDesign name={'edit'} size={28} color={'green'}
             marginRight={20}
             onPress={() => edit1()}
           />}
        </TouchableOpacity>

        {group1.map((item, index) => (
          <View key={index} style={[styles.GroupContainer,{width:250}]}>
            <Text style={[styles.containerText, { marginLeft:20,padding:5, fontWeight: '500' }]}>{convertToTitleCase(item[0])}</Text>
            {editvalue1 === true ?
              <TextInput placeholder='Enter' style={{ width:200,backgroundColor:'white',borderWidth: 1, borderColor: 'gray',borderRadius:5, marginBottom: 1, height: 40,marginLeft:20,padding:5, fontWeight: '500' }}
                value={editedValues1[index].toString()}
                onChangeText={(text) => {
                  const newEditedValues = [...editedValues1];
                  newEditedValues[index] = text;
                  setEditedValues1(newEditedValues);
                }}
              /> :
              <Text style={{ marginLeft:20,padding:5,color:'black' }}>{item[1].toString()}</Text>
            }
          </View>
        ))}
      </View>

      <View style={[styles.container,{width:360}]}>
        <TouchableOpacity style={{ alignItems: 'flex-end' }}>
          {editvalue2 === true ?
            <AntDesign name={'checkcircleo'} size={28} color={'green'}
            marginRight={20}
            onPress={() => update2()}
          /> :
             <AntDesign name={'edit'} size={28} color={'green'}
             marginRight={20}
             onPress={() => edit2()}
           />}
        </TouchableOpacity>

        {group2.map((item, index) => (
          <View key={index} style={[styles.GroupContainer,{width:250}]}>
            <Text style={[styles.containerText, { marginLeft: 20,padding: 5, fontWeight: '500' }]}>{convertToTitleCase(item[0])}</Text>
            {editvalue2 === true ?
              <TextInput placeholder='Enter' style={{ width:200,backgroundColor:'white',borderWidth: 1, borderColor: 'gray',borderRadius:5, marginBottom: 2, height: 40,marginLeft:20,padding:5, fontWeight: '500'  }}
                value={editedValues2[index].toString()}
                onChangeText={(text) => {
                  const newEditedValues = [...editedValues2];
                  newEditedValues[index] = text;
                  setEditedValues2(newEditedValues);
                }}
              /> :
              <Text style={{ marginLeft:20,padding:5, color:'black' }}>{item[1].toString()}</Text>
            }
          </View>
        ))}
      </View>

      <View style={[styles.container,{width:360}]}>
        <TouchableOpacity style={{ alignItems: 'flex-end' }}>
          {editvalue3 === true ?
            <AntDesign name={'checkcircleo'} size={28} color={'green'}
            marginRight={20}
            onPress={() => update3()}
          /> :
             <AntDesign name={'edit'} size={28} color={'green'}
             marginRight={20}
             onPress={() => edit3()}
           />}
        </TouchableOpacity>

        {group3.map((item, index) => (
          <View key={index} style={[styles.GroupContainer,{width:250}]}>
            <Text style={[styles.containerText, { marginLeft: 20,padding: 5, fontWeight: '500' }]}>{convertToTitleCase(item[0])}</Text>
            {editvalue3 === true ?
              <TextInput placeholder='Enter' style={{ width:200,backgroundColor:'white',borderWidth: 1, borderColor: 'gray',borderRadius:5, marginBottom: 2, height: 40 ,marginLeft:20,padding:5, fontWeight: '500'}}
                value={editedValues3[index].toString()}
                onChangeText={(text) => {
                  const newEditedValues = [...editedValues3];
                  newEditedValues[index] = text;
                  setEditedValues3(newEditedValues);
                }}
              /> :
              <Text style={{ marginLeft:20,padding:5,color:'black' }}>{item[1].toString()}</Text>
            }
          </View>
        ))}
      </View>

      <View style={[styles.container,{width:360}]}>
        <TouchableOpacity style={{ alignItems: 'flex-end' }}>
          {editvalue4 === true ?
            <AntDesign name={'checkcircleo'} size={28} color={'green'}
            marginRight={20}
            onPress={() => update4()}
          /> :
             <AntDesign name={'edit'} size={28} color={'green'}
             marginRight={20}
             onPress={() => edit4()}
           />}
        </TouchableOpacity>

        {group4.map((item, index) => (
          <View key={index} style={[styles.GroupContainer,{width:250}]}>
            <Text style={[styles.containerText, { marginLeft: 20,padding: 5, fontWeight: '500' }]}>{convertToTitleCase(item[0])}</Text>
            {editvalue4 === true ?
              <TextInput placeholder='Enter' style={{backgroundColor:'white', borderWidth: 1, borderColor: 'gray',borderRadius:5, marginBottom: 1, height: 40,width:200,marginLeft:20,padding:5, fontWeight: '500' }}
                value={editedValues4[index].toString()}
                onChangeText={(text) => {
                  const newEditedValues = [...editedValues4];
                  newEditedValues[index] = text;
                  setEditedValues4(newEditedValues);
                }}
              /> :
              <Text style={{ marginLeft:20,padding:5, color:'black'}}>{item[1].toString()}</Text>
            }
          </View>
        ))}
      </View>
    </ScrollView>
    </ImageBackground>
  )
}

const styles=({
  backgroundImage:{
    flex:1
  },
  container: {
    backgroundColor: 'white',
    margin:10,
    height:170,
    borderRadius: 15,
    // padding: 5
  },
  containerText: {
    color: '#0366b1',
    fontSize: 14,
    // marginHorizontal: 8,
    width: '45%',
    fontWeight: 'bold',
    marginVertical: 5,
    paddingHorizontal: 1,
  },
  GroupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
  
export default Groups;