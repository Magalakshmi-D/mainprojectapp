import { StyleSheet, Text, View, ScrollView,ImageBackground, TouchableOpacity, Button, Image, Modal, TextInput, Pressable, LayoutAnimation } from 'react-native'
import React, { useState, useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import DATA from './android/app/src/main/assets/proconfig.json';

const Slot1 = () => {
  const [colors, setColor] = React.useState(0)
  const [slot, setSlot] = React.useState(0)
  const [checkVpd, setCheckVpd] = useState(false);
  const [checkThreshold, setCheckThreshold] = useState(false);
  const [checkChannel, setCheckChannel] = useState(false);

  // console.log(checkVpd);
  var objects = new Object();
  var myObject = DATA.devices[2]['quad'][slot];
  // console.log(myObject, 'myobject');
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
  // const data=slot1Array[0].slot;
  const [showwarning, setShowwarning] = useState(false);

  return (
    <ImageBackground
        source={require('./src/assets/image/back3.jpg')}
        style={styles.backgroundImage}
      >
    <View>
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
              let vpd = Object.entries(item["vpd"]);

              const thresholds = Object.entries(item["thresholds"]);
              const [thers,setThers]=useState(thresholds);
              const [editchan1,setEditChan1]=useState(false);
              const [editedValues1,setEditedValues1]=useState(thers.map((item) => item[1]));

              const channels_enables = Object.entries(item["channels_enable"]);
              const [channels_enable,setChannelsEnable]=useState(channels_enables);
              // console.log(channels_enable, 'channel');
              const [editchan, setEditChan] = useState(false);
              const [editedValues, setEditedValues] = useState(channels_enable.map((item) => item[1]));
              
              const editthreshold=()=>{
                setEditChan1(true);
              };
              const submitThreshold=()=>{
                console.log('threshold');
                const updatedChannels = thers.map((item, index) => [item[0], editedValues1[index]]);
                setThers(updatedChannels);
                setEditChan1(false);
              }
              const editchannel = () => {
                setEditChan(true);
              };
              const submitChannel = () => {
                const updatedChannels = channels_enable.map((item, index) => [item[0], editedValues[index]]);
                setChannelsEnable(updatedChannels);
                setEditChan(false);
              };
              function convertToTitleCase(str) {
                const words = str.split('_');
                const titleCaseStr = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                return titleCaseStr;
              }
              
              const [slotEdit,setSlotEdit]=useState(false);
              return (
                <View key={index} style={{ flex: 1, alignItems: 'center', marginTop: 80, marginLeft: 30, marginRight: 30, marginBottom: 40 }}>
                  <View style={{ backgroundColor: 'white', marginTop: 5, padding: 10 }} >
                    {/* <TouchableOpacity style={{alignItems:'flex-end',backgroundColor:'#466239',marginLeft:250,marginBottom:10,borderRadius:5}}>
                      <Text style={{padding:8,width:50,color:'white'}}>
                        <AntDesign name={'edit'} size={25} color={'#edf0eb'}            
                        onPress={()=>edit()}
                      /></Text>
                    </TouchableOpacity> */}
                    <View style={[styles.GroupContainer, {}]}>
                      <Text style={[styles.containerText, { textAlign: 'justify', fontSize: 16, fontWeight: 'bold',flex:0.5 }]}>Slot</Text>
                      {slotEdit === true ?
                      <TextInput style={[styles.containerText, { textAlign: 'center', fontSize: 16 ,flex:0.5,borderWidth:2,borderColor:'gray'}]} placeholder='Enter' value={slot} onChangeText={setSlot}/>
                      :
                      <Text style={[styles.containerText, { textAlign: 'center', fontSize: 16 ,flex:0.5}]}>{item["slot"]}</Text>}
                      {slotEdit === true ?
                      <AntDesign name={'edit'} size={25} color={'green'}
                      
                      onPress={() => {
                        setSlotEdit(true);
                      }}
                    />:null}
                    </View>
                    <View style={[styles.GroupContainer, {width:'100%'}]}>
                      <Text style={[styles.containerText, { textAlign: 'justify', fontSize: 16, fontWeight: 'bold' ,flex:1.9}]}>Card Present</Text>
                      <Text style={[styles.containerText, { textAlign: 'center', fontSize: 16 ,flex:0.}]}>{item["card_present"].toString()}</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', backgroundColor: 'white', height: 40 }} >
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
                      <View style={[styles.container,{width:324.5}]} >
                        {vpd.map((item, index) => {
                          // console.log(item)
                          return (
                            <View key={index} style={[styles.GroupContainer, {}]}>
                              <Text style={[styles.containerText, { textAlign: 'justify', marginLeft: 10, padding: 5, fontWeight: '500' }]}>{convertToTitleCase(item[0])}</Text>
                              <Text style={[styles.containerText, { textAlign: 'justify' }]}>{item[1].toString()}</Text>
                            </View>
                          )
                        })}
                      </View>
                      :
                      null
                  }
                  <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', backgroundColor: 'white', height: 40 }} >
                    <Text style={styles.headerText}>{convertToTitleCase(arr[3])}</Text>
                    <AntDesign name={checkThreshold === true ? 'upcircleo' : 'downcircleo'} size={25} color={checkThreshold === true ? 'green' : 'black'}
                      marginRight={checkThreshold === true ? -89 : 75}
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
                      <View style={[styles.container,{width:324.5}]}>
                        {thers.map((item, index) => {
                          // console.log(item)
                          return (
                            <View key={index} style={[styles.GroupContainer,]}>
                              <Text style={[styles.containerText, { marginLeft: 20, padding: 5, fontWeight: '500' }]}>{convertToTitleCase(item[0])}</Text>
                              {editchan1 ? (
                              <TextInput style={{ borderWidth: 1, borderColor: 'gray', width: 100, marginBottom: 2, height: 40,borderRadius:5,backgroundColor:'white' }}
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
                  
                  <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', backgroundColor: 'white', height: 35 }} >
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
                    <View style={[styles.container, { paddingLeft: 10,width:324 }]} >
                      {channels_enable.map((item, index) => {
                        // console.log(item)
                        return (
                          <View key={index} style={[styles.GroupContainer, {marginBottom:1,marginTop:15 }]}>
                            <Text style={[styles.containerText, { padding: 5, fontWeight: '500', marginTop: 10,marginLeft:40 }]}>{convertToTitleCase(item[0])}</Text>
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

export default Slot1;

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
    opacity:0.8
  },
  container: {
    backgroundColor: 'white',
    width: '50%',
    // borderRadius: 15,
    // padding: 5
  },
  containerText: {
    color: 'black',
    fontSize: 14,
    // marginHorizontal: 8,
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
    backgroundColor: 'white',
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
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  warning_modal: {
    width: 360,
    height: 700,
    backgroundColor: '#ffffff',
    // borderWidth:1,
    // borderColor:'#000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60
  },
});