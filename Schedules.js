import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, LayoutAnimation, Image,ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import example from './android/app/src/main/assets/proconfig.json';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Schedules = () => {
  const data = example.common.schedules;
  const schedule1 = data[0];
  // console.log(schedule1, 'she');
  const [sch1, setSch1] = useState(schedule1);
  console.log(sch1, 'shc1');
  const grouptrack1 = schedule1['groups-tracks'];
  const [group1, setGroup1] = useState(grouptrack1);
  const [editedGroup1, setEditedGroup1] = useState(grouptrack1.map((item) => ({ ...item })));
  const [checkVpd1, setCheckVpd1] = useState(false);
  const [checkTrack1, setCheckTrack1] = useState(false);
  const edit1 = () => {
    console.log('edit1');
    setEditDays1(false);
    setChangeEditIcon1(true);
  }
  const [editDays1, setEditDays1] = useState(true);
  const schedule11 = Object.entries(schedule1.days);
  const [checkschedule1, setCheckSchedule1] = useState(schedule11);
  // const [editedValues1, setEditedValues1] = useState(checkschedule1.map((item) => item[1]));
  const [changeEditIcon1, setChangeEditIcon1] = useState(false);

  const update1 = () => {
    console.log('update1');
    setChangeEditIcon1(false);
    setEditDays1(true);

  }
  const handleInputChange1 = (index, text) => {
    setCheckSchedule1((prevSchedule) => {
      const newSchedule = [...prevSchedule];
      newSchedule[index][1] = text; // Update the value at the given index
      return newSchedule;
    });
  };

  const handleStartTimeChange11 = (text) => {
    if ('startTime' in sch1) {
      setSch1((prevSch1) => ({ ...prevSch1, startTime: text }));
    }
  };

  const handleStartTimeChange12 = (text) => {
    if ('endTime' in sch1) {
      setSch1((prevSch1) => ({ ...prevSch1, endTime: text }));
    }
  };

  const handlegroup1 = (rowIndex, key, text) => {
    setEditedGroup1((prevGroup) => {
      const updatedGroup = [...prevGroup];
      updatedGroup[rowIndex][key] = text;
      return updatedGroup;
    });
    setGroup1(editedGroup1);
  };

  //  -----------------------------------------------------------------------------------------------------------------------
  const schedule2 = data[1];
  const [sch2, setSch2] = useState(schedule2);
  console.log(sch2, 'shc1');
  const grouptrack2 = schedule2['groups-tracks'];
  const [group2, setGroup2] = useState(grouptrack2);
  const [editedGroup2, setEditedGroup2] = useState(grouptrack2.map((item) => ({ ...item })));
  const [checkVpd2, setCheckVpd2] = useState(false);
  const [checkTrack2, setCheckTrack2] = useState(false);

  const edit2 = () => {
    console.log('edit2');
    setEditDays2(false);
    setChangeEditIcon2(true);
  }
  const [editDays2, setEditDays2] = useState(true);
  const schedule21 = Object.entries(schedule2.days);
  const [checkschedule2, setCheckSchedule2] = useState(schedule21);
  // const [editedValues1, setEditedValues1] = useState(checkschedule1.map((item) => item[1]));
  const [changeEditIcon2, setChangeEditIcon2] = useState(false);

  const update2 = () => {
    console.log('update2');
    setChangeEditIcon2(false);
    setEditDays2(true);

  }
  const handleInputChange2 = (index, text) => {
    setCheckSchedule2((prevSchedule) => {
      const newSchedule = [...prevSchedule];
      newSchedule[index][1] = text; // Update the value at the given index
      return newSchedule;
    });
  };

  const handleStartTimeChange21 = (text) => {
    if ('startTime' in sch2) {
      setSch2((prevSch2) => ({ ...prevSch2, startTime: text }));
    }
  };

  const handleStartTimeChange22 = (text) => {
    if ('endTime' in sch2) {
      setSch2((prevSch2) => ({ ...prevSch2, endTime: text }));
    }
  };

  const handlegroup2 = (rowIndex, key, text) => {
    setEditedGroup2((prevGroup) => {
      const updatedGroup = [...prevGroup];
      updatedGroup[rowIndex][key] = text;
      return updatedGroup;
    });
    setGroup2(editedGroup2);
  };
  // -----------------------------------------------------------------------------------------------------------------------
  const schedule3 = data[2];
  const [sch3, setSch3] = useState(schedule3);
  console.log(sch3, 'shc1');
  const grouptrack3 = schedule3['groups-tracks'];
  const [group3, setGroup3] = useState(grouptrack3);
  const [editedGroup3, setEditedGroup3] = useState(grouptrack3.map((item) => ({ ...item })));

  const [checkVpd3, setCheckVpd3] = useState(false);
  const [checkTrack3, setCheckTrack3] = useState(false);

  const edit3 = () => {
    console.log('edit3');
    setEditDays3(false);
    setChangeEditIcon3(true);
  }
  const [editDays3, setEditDays3] = useState(true);
  const schedule31 = Object.entries(schedule3.days);
  const [checkschedule3, setCheckSchedule3] = useState(schedule31);
  // const [editedValues1, setEditedValues1] = useState(checkschedule1.map((item) => item[1]));
  const [changeEditIcon3, setChangeEditIcon3] = useState(false);

  const update3 = () => {
    console.log('update3');
    setChangeEditIcon3(false);
    setEditDays3(true);

  }
  const handleInputChange3 = (index, text) => {
    setCheckSchedule3((prevSchedule) => {
      const newSchedule = [...prevSchedule];
      newSchedule[index][1] = text; // Update the value at the given index
      return newSchedule;
    });
  };

  const handleStartTimeChange31 = (text) => {
    if ('startTime' in sch3) {
      setSch3((prevSch3) => ({ ...prevSch3, startTime: text }));
    }
  };

  const handleStartTimeChange32 = (text) => {
    if ('endTime' in sch3) {
      setSch3((prevSch3) => ({ ...prevSch3, endTime: text }));
    }
  };

  const handlegroup3 = (rowIndex, key, text) => {
    setEditedGroup3((prevGroup) => {
      const updatedGroup = [...prevGroup];
      updatedGroup[rowIndex][key] = text;
      return updatedGroup;
    });
    setGroup3(editedGroup3);
  };
 

  return (
    <ImageBackground
        source={require('./src/assets/image/back3.jpg')}
        style={styles.backgroundImage}
      >
    <ScrollView>
      <View style={styles.content}>
        <Text style={styles.name}>Schedules 1</Text>
        {changeEditIcon1 === true ?
          <AntDesign
            name={'checkcircleo'}
            size={25}
            color={'white'}
            style={styles.imageContainer}
            onPress={() => update1()}
          />
          : <AntDesign
            name={'edit'}
            size={25}
            color={'white'}
            style={styles.imageContainer}
            onPress={() => edit1()}
          />}
      </View>
      <View
        style={styles.day}>
        <Text style={styles.headerText}>Days</Text>
        <TouchableOpacity
          onPress={() => {
            setCheckVpd1(!checkVpd1);
          }}
        >
          {checkVpd1 === true ?
            <AntDesign
              name="upcircleo"
              size={22}
              color={checkVpd1 === true ? 'green' : 'gray'}
              style={{ marginRight: 75 }}
            /> :
            <AntDesign
              name="downcircleo"
              size={22}
              color={checkVpd1 === true ? 'green' : 'gray'}
              style={{ marginRight: 75 }}
            />}
        </TouchableOpacity>
      </View>

      {checkVpd1 ? (
        <View style={[styles.container, { width: 350, marginLeft: 20 }]}>
          {checkschedule1.map(([key, value], index) => {
            return (
              <View style={[styles.GroupContainer, { marginLeft: 30 }]} key={key}>
                {editDays1 === true && changeEditIcon1 === false ?
                  <Text style={{ flexDirection: 'row', marginLeft: 100 }}>- {String(value)}</Text> :
                  <TextInput style={styles.textinput} placeholder='Enter Days' value={value}
                    onChangeText={(text) => handleInputChange1(index, text)} />}
              </View>
            );
          })}
        </View>
      ) : null}
      <View style={styles.time}>
        <Text style={styles.timehead}>StartTime</Text>
        {editDays1 === true ?
          <Text style={{ flex: 1 }}>{sch1.startTime}</Text> :
          <TextInput placeholder='Enter start time' style={styles.textinput}
            value={sch1.startTime}
            onChangeText={handleStartTimeChange11} />}
      </View>
      <View style={styles.time}>
        <Text style={styles.timehead}>End Time</Text>
        {editDays1 === true ?
          <Text style={{ flex: 1 }}>{sch1.endTime}</Text> :
          <TextInput placeholder='Enter End time' style={styles.textinput}
            value={sch1.endTime}
            onChangeText={handleStartTimeChange12} />}
      </View>
      <View
        style={styles.tracks}
      >
        <Text style={styles.headerText}>Group Tracks</Text>
        <TouchableOpacity
          onPress={() => {
            setCheckTrack1(!checkTrack1);
          }}
        >
          {checkTrack1 === true ?
            <AntDesign
              name="upcircleo"
              size={22}
              color={checkTrack1 === true ? 'green' : 'gray'}
              style={{ marginRight: 75 }}
            /> :
            <AntDesign
              name="downcircleo"
              size={22}
              color={checkTrack1 === true ? 'green' : 'gray'}
              style={{ marginRight: 75 }}
            />}
        </TouchableOpacity>
      </View>

      {checkTrack1 ? (
        <View style={[styles.container, { width: 350, marginLeft: 19 }]}>
          <View style={styles.tableHeader}>
            {Object.keys(grouptrack1[0]).map((header) => (
              <Text key={header} style={styles.tableHeaderText}>
                {header}
              </Text>
            ))}
          </View>
          {group1.map((item, rowIndex) => (
            <View key={rowIndex} style={styles.tableRow}>
              {Object.entries(item).map(([key, value], colIndex) =>
                editDays1 ? (
                  <Text key={colIndex} style={styles.tableCell}>
                    {value}
                  </Text>
                ) : (
                  <TextInput
                    key={colIndex}
                    style={[styles.tableCellInput, { width: 120, marginLeft: 5, borderWidth: 1, borderColor: 'gray', borderRadius: 4, height: 40 ,backgroundColor:'white'}]}
                    value={editedGroup1[rowIndex][key].toString()}
                    onChangeText={(text) => handlegroup1(rowIndex, key, text)}
                  />
                )
              )}
            </View>
          ))}
        </View>
      ) : null}
      {/*=======================================================================================  */}

      <View style={styles.content}>
        <Text style={styles.name}>Schedules 2</Text>
        {changeEditIcon2 === true ?
          <AntDesign
            name={'checkcircleo'}
            size={25}
            color={'white'}
            style={styles.imageContainer}
            onPress={() => update2()}
          />
          : <AntDesign
            name={'edit'}
            size={25}
            color={'white'}
            style={styles.imageContainer}
            onPress={() => edit2()}
          />}
      </View>
      <View
        style={styles.day}>
        <Text style={styles.headerText}>Days</Text>
        <TouchableOpacity
          onPress={() => {
            setCheckVpd2(!checkVpd2);
          }}
        >
          {checkVpd2 === true ?
            <AntDesign
              name="upcircleo"
              size={22}
              color={checkVpd2 === true ? 'green' : 'gray'}
              style={{ marginRight: 75 }}
            /> :
            <AntDesign
              name="downcircleo"
              size={22}
              color={checkVpd2 === true ? 'green' : 'gray'}
              style={{ marginRight: 75 }}
            />}
        </TouchableOpacity>
      </View>

      {checkVpd2 ? (
        <View style={[styles.container, { width: 350, marginLeft: 20 }]}>
          {checkschedule2.map(([key, value], index) => {
            return (
              <View style={[styles.GroupContainer, { marginLeft: 30 }]} key={key}>
                {editDays2 === true && changeEditIcon2 === false ?
                  <Text style={{ flexDirection: 'row', marginLeft: 100 }}>- {String(value)}</Text> :
                  <TextInput style={styles.textinput} placeholder='Enter Days' value={value}
                    onChangeText={(text) => handleInputChange2(index, text)} />}
              </View>
            );
          })}
        </View>
      ) : null}
      <View style={styles.time}>
        <Text style={styles.timehead}>StartTime</Text>
        {editDays2 === true ?
          <Text style={{ flex: 1 }}>{sch2.startTime}</Text> :
          <TextInput placeholder='Enter start time' style={styles.textinput}
            value={sch2.startTime}
            onChangeText={handleStartTimeChange21} />}
      </View>
      <View style={styles.time}>
        <Text style={styles.timehead}>End Time</Text>
        {editDays2 === true ?
          <Text style={{ flex: 1 }}>{sch2.endTime}</Text> :
          <TextInput placeholder='Enter End time' style={styles.textinput}
            value={sch2.endTime}
            onChangeText={handleStartTimeChange22} />}
      </View>
      <View
        style={styles.tracks}
      >
        <Text style={styles.headerText}>Group Tracks</Text>
        <TouchableOpacity
          onPress={() => {
            setCheckTrack2(!checkTrack2);
          }}
        >
          {checkTrack2 === true ?
            <AntDesign
              name="upcircleo"
              size={22}
              color={checkTrack2 === true ? 'green' : 'gray'}
              style={{ marginRight: 75 }}
            /> :
            <AntDesign
              name="downcircleo"
              size={22}
              color={checkTrack2 === true ? 'green' : 'gray'}
              style={{ marginRight: 75 }}
            />}
        </TouchableOpacity>
      </View>

      {checkTrack2 ? (
        <View style={[styles.container, { width: 350, marginLeft: 19 }]}>
          <View style={styles.tableHeader}>
            {Object.keys(grouptrack2[0]).map((header) => (
              <Text key={header} style={styles.tableHeaderText}>
                {header}
              </Text>
            ))}
          </View>
          {group2.map((item, rowIndex) => (
            <View key={rowIndex} style={styles.tableRow}>
              {Object.entries(item).map(([key, value], colIndex) =>
                editDays2 ? (
                  <Text key={colIndex} style={styles.tableCell}>
                    {value}
                  </Text>
                ) : (
                  <TextInput
                    key={colIndex}
                    style={[styles.tableCellInput, { width: 120, marginLeft: 5, borderWidth: 1, borderColor: 'gray', borderRadius: 4, height: 40 ,backgroundColor:'white'}]}
                    value={editedGroup2[rowIndex][key].toString()}
                    onChangeText={(text) => handlegroup2(rowIndex, key, text)}
                  />
                )
              )}
            </View>
          ))}
        </View>
      ) : null}
      {/* ============================================================================================================ */}

      <View style={styles.content}>
        <Text style={styles.name}>Schedules 3</Text>
        {changeEditIcon3 === true ?
          <AntDesign
            name={'checkcircleo'}
            size={25}
            color={'white'}
            style={styles.imageContainer}
            onPress={() => update3()}
          />
          : <AntDesign
            name={'edit'}
            size={25}
            color={'white'}
            style={styles.imageContainer}
            onPress={() => edit3()}
          />}
      </View>
      <View
        style={styles.day}>
        <Text style={styles.headerText}>Days</Text>
        <TouchableOpacity
          onPress={() => {
            setCheckVpd3(!checkVpd3);
          }}
        >
          {checkVpd3 === true ?
            <AntDesign
              name="upcircleo"
              size={22}
              color={checkVpd3 === true ? 'green' : 'gray'}
              style={{ marginRight: 75 }}
            /> :
            <AntDesign
              name="downcircleo"
              size={22}
              color={checkVpd3 === true ? 'green' : 'gray'}
              style={{ marginRight: 75 }}
            />}
        </TouchableOpacity>
      </View>

      {checkVpd3 ? (
        <View style={[styles.container, { width: 350, marginLeft: 20 }]}>
          {checkschedule3.map(([key, value], index) => {
            return (
              <View style={[styles.GroupContainer, { marginLeft: 30 }]} key={key}>
                {editDays3 === true && changeEditIcon3 === false ?
                  <Text style={{ flexDirection: 'row', marginLeft: 100 }}>- {String(value)}</Text> :
                  <TextInput style={styles.textinput} placeholder='Enter Days' value={value}
                    onChangeText={(text) => handleInputChange3(index, text)} />}
              </View>
            );
          })}
        </View>
      ) : null}
      <View style={styles.time}>
        <Text style={styles.timehead}>StartTime</Text>
        {editDays3 === true ?
          <Text style={{ flex: 1 }}>{sch3.startTime}</Text> :
          <TextInput placeholder='Enter start time' style={styles.textinput}
            value={sch3.startTime}
            onChangeText={handleStartTimeChange31} />}
      </View>
      <View style={styles.time}>
        <Text style={styles.timehead}>End Time</Text>
        {editDays3 === true ?
          <Text style={{ flex: 1 }}>{sch3.endTime}</Text> :
          <TextInput placeholder='Enter End time' style={styles.textinput}
            value={sch3.endTime}
            onChangeText={handleStartTimeChange32} />}
      </View>
      <View
        style={styles.tracks}
      >
        <Text style={styles.headerText}>Group Tracks</Text>
        <TouchableOpacity
          onPress={() => {
            setCheckTrack3(!checkTrack3);
          }}
        >
          {checkTrack3 === true ?
            <AntDesign
              name="upcircleo"
              size={22}
              color={checkTrack3 === true ? 'green' : 'gray'}
              style={{ marginRight: 75 }}
            /> :
            <AntDesign
              name="downcircleo"
              size={22}
              color={checkTrack3 === true ? 'green' : 'gray'}
              style={{ marginRight: 75 }}
            />}
        </TouchableOpacity>
      </View>

      {checkTrack3 ? (
        <View style={[styles.container, { width: 350, marginLeft: 19 }]}>
          <View style={styles.tableHeader}>
            {Object.keys(grouptrack3[0]).map((header) => (
              <Text key={header} style={styles.tableHeaderText}>
                {header}
              </Text>
            ))}
          </View>
          {group3.map((item, rowIndex) => (
            <View key={rowIndex} style={styles.tableRow}>
              {Object.entries(item).map(([key, value], colIndex) =>
                editDays3 ? (
                  <Text key={colIndex} style={styles.tableCell}>
                    {value}
                  </Text>
                ) : (
                  <TextInput
                    key={colIndex}
                    style={[styles.tableCellInput, { width: 120, marginLeft: 5, borderWidth: 1, borderColor: 'gray', borderRadius: 4, height: 40,backgroundColor:'white' }]}
                    value={editedGroup3[rowIndex][key].toString()}
                    onChangeText={(text) => handlegroup3(rowIndex, key, text)}
                  />
                )
              )}
            </View>
          ))}
        </View>
      ) : null}
    </ScrollView>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
    opacity:0.9
  },
  GroupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerText: {
    color: 'black',
    fontSize: 14,
    flexDirection: 'column',
    // marginHorizontal: 8,
    width: '50%',
    fontWeight: '400',
    marginVertical: 5,
    paddingHorizontal: 10

    // margin:10

  },
  headerText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
    marginLeft: 20,

  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    // borderRadius: 15,
    padding: 5
  },
  imageContainer: {
    marginRight: 60
  },
  bluetoothImage: {
    width: 25,
    height: 25,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    padding: 10,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    // backgroundColor: 'white'
  },
  content: {
    flexDirection: 'row', marginTop: 20,
  },
  name: {
    flex: 2, marginLeft: 30, color: 'black', fontWeight: 'bold', fontSize: 18
  },
  day: {
    flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', backgroundColor: '#EEEEEE', height: 35, marginTop: 20, marginLeft: 20, borderTopLeftRadius: 5, width: 350, borderTopRightRadius: 5
  },
  textinput: {
    flexDirection: 'row', marginLeft: 100, borderColor: 'gray', borderWidth: 1, width: 140, height: 40,borderRadius:5,backgroundColor:'white'
  },
  time: {
    flexDirection: 'row', backgroundColor: '#eeeeee', paddingTop: 10, marginLeft: 20, width: 350
  },
  timehead: {
    flex: 2.3, color: 'black', fontSize: 15, marginLeft: 20, fontWeight: '500',
  },
  tracks:
  {
    flexDirection: 'row',
    alignItems: 'center',
    // width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#EEEEEE',
    height: 40,
    paddingTop: 5,
    marginLeft: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 350,
  }
})
export default Schedules;