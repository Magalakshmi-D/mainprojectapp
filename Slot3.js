import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput,Image,ImageBackground, LayoutAnimation } from 'react-native'
import React, { useState, useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import DATA from './android/app/src/main/assets/proconfig.json';

const Slot3 = () => {
  const [colors, setColor] = React.useState(0)
  const [slot, setSlots] = React.useState(2);
  const [checkVpd, setCheckVpd] = useState(false);
  const [checkThreshold, setCheckThreshold] = useState(false);
  const [checkChannel, setCheckChannel] = useState(false);
  console.log(checkVpd);
  var objects = new Object();
  var myObject = DATA.devices[2]['quad'][slot];
  console.log(myObject,'myobject');
  let temp = 0;
  let arr = new Array();
  for (var val in myObject) {
    arr.push(val)
  }
  // console.log(arr);
  for (var val in myObject) {
    objects[arr[temp]] = myObject[val];
    // console.log(temp);
    temp++;
  }
  slot1Array = new Array(objects);
//   slot1Array.map((item, index) => {
//     // let vpd = Object.entries(item["vpd"])
//     // console.log(vpd)
//   })
  const CustomBtn = ({ child, Index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
          setColor(Index)
          setSlots(Index)
        }}
        style={{
          borderRadius: 20,
          borderWidth: 1,
          borderColor: Index === colors ? 'black' : 'lightgray',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 18,
          backgroundColor: Index === colors ? 'white' : 'white',
          paddingHorizontal: 15,
          paddingVertical: 5
        }} >
        <Text style={{
          color: 'black',
          textAlign: 'center'
        }}>
          {child}
        </Text>
      </TouchableOpacity>
    )
  }
  return (
    <ImageBackground
        source={require('./src/assets/image/back3.jpg')}
        style={styles.backgroundImage}
      >
    <View >
      <ScrollView>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
          </ScrollView>
          <View style={{}} >
            {slot1Array.map((item, index) => {
              // console.log(, index)
              let vpd = Object.entries(item["vpd"])
              const thresholds = Object.entries(item["thresholds"]);
              const [thers,setThers]=useState(thresholds);
              const [editchan1,setEditChan1]=useState(false);
              const [editedValues1,setEditedValues1]=useState(thers.map((item) => item[1]));

              const channels_enables = Object.entries(item["channels_enable"]);
              const [channels_enable,setChannelsEnable]=useState(channels_enables);
              // console.log(channels_enable, 'channel');
              const [editchan, setEditChan] = useState(false);
              const [editedValues, setEditedValues] = useState(channels_enable.map((item) => item[1]));

              const editchannel = () => {
                setEditChan(true);
              };
              const editthreshold=()=>{
                setEditChan1(true);
              };
              const submitThreshold=()=>{
                console.log('threshold');
                const updatedChannels = thers.map((item, index) => [item[0], editedValues1[index]]);
                setThers(updatedChannels);
                setEditChan1(false);
              }
              const submitChannel = () => {
                const updatedChannels = channels_enable.map((item, index) => [item[0], editedValues[index]]);
                setChannelsEnable(updatedChannels);
                setEditChan(false);
              };
              function convertToTitleCase(str) {
                // Split the string by underscore and convert it to an array
                const words = str.split('_');
            
                // Capitalize the first letter of each word and join them with a space
                const titleCaseStr = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            
                return titleCaseStr;
              }
              // console.log(vpd)
              return (
                <View key={index} style={{ flex: 1, alignItems: 'center',marginTop:80,marginLeft:30,marginRight:30,marginBottom:40}}>
                  <View style={{ backgroundColor: '#EEEEEE', marginTop: 5, padding: 10 }} >
                    <View style={[styles.GroupContainer, {}]}>
                      <Text style={[styles.containerText, { textAlign: 'justify', fontSize: 16,fontWeight:'bold' }]}>Slot</Text>
                      <Text style={[styles.containerText, { textAlign: 'center', fontSize: 16 }]}>{item["slot"]}</Text>
                    </View>
                    <View style={[styles.GroupContainer, {}]}>
                      <Text style={[styles.containerText, { textAlign: 'justify', fontSize: 16 ,fontWeight:'bold' }]}>Card Present</Text>
                      <Text style={[styles.containerText, { textAlign: 'center', fontSize: 16 }]}>{item["card_present"].toString()}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row',alignItems:'center',width:'100%',justifyContent: 'space-between',backgroundColor:'#EEEEEE',height: 40}} >
                    <Text style={styles.headerText}>{convertToTitleCase(arr[2])}</Text>
                    <AntDesign name={checkVpd === true ? 'upcircleo' : 'downcircleo'} size={25} color={checkVpd === true ? 'green' : 'black'}
                      style={{ marginRight: 75 }}
                      onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                        setCheckVpd(value => !value)
                      }}
                    />
                  </View>
                  {
                    checkVpd === true ?
                      <View style={styles.container} >
                        {vpd.map((item, index) => {
                          // console.log(item)
                          return (
                            <View key={index} style={[styles.GroupContainer, {}]}>
                              <Text style={[styles.containerText, { textAlign: 'justify' ,marginLeft:10,padding:5,fontWeight:'500'}]}>{convertToTitleCase(item[0])}</Text>
                              <Text style={[styles.containerText, { textAlign: 'justify' }]}>{item[1].toString()}</Text>
                            </View>
                          )
                        })}
                      </View>
                      :
                      null
                  }
                  <View style={{flexDirection: 'row',alignItems:'center',width:'100%',justifyContent: 'space-between',backgroundColor:'#EEEEEE',height: 40}} >
                    <Text style={styles.headerText}>{convertToTitleCase(arr[3])}</Text>
                    <AntDesign name={checkThreshold === true ? 'upcircleo' : 'downcircleo'} size={25} color={checkThreshold === true ? 'green' : 'black'}
                      marginRight={checkThreshold === true ? -83 : 75}
                      onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                        setCheckThreshold(value => !value)
                      }}
                    />
                    {checkThreshold === true && editchan1 === false ?
                      <AntDesign name={'edit'} size={25} color={checkThreshold === true ? 'green' : 'blue'}
                        marginRight={checkThreshold === true ? 20 : null}
                        onPress={()=>editthreshold()}
                      />
                      : null}
                    {editchan1 === true ?
                    <AntDesign name={'checkcircleo'} size={25} color={editchan1 === true ? 'green' : 'blue'}
                        marginRight={editchan1 === true ? 20 : null}
                        onPress={() => submitThreshold()}
                      /> :null}
                  </View>
                  {
                    checkThreshold === true ?
                      <View style={styles.container} >
                        {thers.map((item, index) => {
                          // console.log(item)
                          return (
                            <View key={index} style={[styles.GroupContainer,]}>
                              <Text style={[styles.containerText, { marginLeft:10,padding:5,fontWeight:'500' }]}>{convertToTitleCase(item[0])}</Text>
                              {editchan1 ? (
                              <TextInput style={{ borderWidth: 1, borderColor: 'gray', width: 100, marginBottom: 2, height: 40,backgroundColor:'white',borderRadius:5 }}
                                placeholder={item[1].toString()}
                                value={editedValues1[index].toString()}
                                onChangeText={(text) => {
                                  const newEditedValues = [...editedValues1];
                                  newEditedValues[index] = text.toString();
                                  setEditedValues1(newEditedValues);
                                }}
                              />
                            ) : (
                              <Text style={[styles.containerText, {}]}>{item[1].toString()}</Text>
                            )}
                            </View>
                          )
                        })}
                      </View>
                      : null
                  }
                  <View style={{flexDirection: 'row',alignItems:'center',width:'100%',justifyContent: 'space-between',backgroundColor:'#EEEEEE',height: 35}} >
                    <Text style={styles.headerText}>{convertToTitleCase(arr[4])}</Text>
                    <AntDesign name={checkChannel === true ? 'upcircleo' : 'downcircleo'} size={25} color={checkChannel === true ? 'green' : 'black'}
                       marginRight={checkChannel === true ? -39 : 75}
                      onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                        setCheckChannel(value => !value)
                      }}
                    />
                    {checkChannel === true && editchan === false ?
                      <AntDesign name={'edit'} size={25} color={checkChannel === true ? 'green' : 'blue'}
                        marginRight={checkChannel === true ? 20 : null}
                        onPress={() => editchannel()}
                      />
                      : 
                      null}
                    {editchan === true ?
                    <AntDesign name={'checkcircleo'} size={25} color={editchan === true ? 'green' : 'blue'}
                        marginRight={editchan === true ? 20 : null}
                        onPress={() => submitChannel()}
                      /> :null}
                  </View>
                  {checkChannel ?
                    <View style={styles.container} >
                      {channels_enable.map((item, index) => {
                        // console.log(item)
                        return (
                          <View key={index} style={[styles.GroupContainer, { marginLeft: 30 }]}>
                            <Text style={[styles.containerText, { textAlign: 'justify' ,marginLeft:10,padding:5,fontWeight:'500'}]}>{convertToTitleCase(item[0])}</Text>
                            {editchan ? (
                              <TextInput style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 2, height: 40,backgroundColor:'white',borderRadius:5,width:100 }}
                                placeholder={item[1].toString()}
                                value={editedValues[index].toString()}
                                onChangeText={(text) => {
                                  const newEditedValues = [...editedValues];
                                  newEditedValues[index] = text.toString();
                                  setEditedValues(newEditedValues);
                                }}
                              />
                            ) : (
                              <Text style={[styles.containerText, {}]}>{item[1].toString()}</Text>
                            )}
                          </View>
                        )
                      })}
                    </View>
                    :
                    null}
                </View>
              )
            })}
          </View>
        </View>
      </ScrollView>
    </View>
    </ImageBackground>
  )
}

export default Slot3;

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1
  },
  container: {
    backgroundColor: '#EEEEEE',
    width: '100%',
    // borderRadius: 15,
    padding: 5
  },
  containerText: {
    color: 'black',
    fontSize: 14,
    // marginHorizontal: 8,
    width: '50%',
    fontWeight: '400',
    marginVertical: 5,
    paddingHorizontal: 10
    // margin:10
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