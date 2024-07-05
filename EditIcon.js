import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EditIcon = () => {
  const [channels_enable, setChannelsEnable] = useState([
    ["t1", "hello"],
    ["t4", "hi"]
  ]);
  const [editchan,setEditChan]=useState(false);
  const [checkChannel,setCheckChannel]=useState(true);
  function convertToTitleCase(str) {
    const words = str.split('_');
    const titleCaseStr = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return titleCaseStr;
  }
  const [editedValues, setEditedValues] = useState(channels_enable.map((item) => item[1]));

  const editchannel = () => {
    setEditChan(true);
  };

  const submitChannel = () => {
    const updatedChannels = channels_enable.map((item, index) => [item[0], editedValues[index]]);
    setChannelsEnable(updatedChannels);
    setEditChan(false);
  };

  return (
    <View style={[styles.container, { paddingLeft: 10 }]}>
        <AntDesign
              name={'edit'}
              size={25}
              color={checkChannel === true ? 'green' : 'blue'}
              onPress={() => editchannel()}
            />
      {channels_enable.map((item, index) => {
        return (
          <View key={index} style={[styles.GroupContainer, { marginLeft: 50, width: '50%' }]}>
            <Text style={[styles.containerText, { padding: 5, fontWeight: '500', marginTop: 10 }]}>
              {convertToTitleCase(item[0])}
            </Text>
            {editchan ? (
              <TextInput style={{borderWidth:1,borderColor:'gray',width:100,marginBottom:2,height:40}}
                placeholder={item[1].toString()}
                value={editedValues[index]} 
                onChangeText={(text) => {
                  const newEditedValues = [...editedValues];
                  newEditedValues[index] = text;
                  setEditedValues(newEditedValues);
                }}
              />
            ) : (
              <Text style={[styles.containerText, {}]}>{item[1].toString()}</Text>
            )}
            
          </View>
        );
      })}
      <TouchableOpacity onPress={() => submitChannel()}>
        <Text>Update</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#EEEEEE',
      width: '100%',
    },
    containerText: {
      color: 'black',
      fontSize: 14,
      width: '50%',
      fontWeight: '400',
      marginVertical: 5,
      paddingHorizontal: 1,
    },
    headerContainer: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 5,
      backgroundColor: 'lightgrey',
      height: 40
    },
    headerText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: 20,
    },
    GroupContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  })
export default EditIcon;