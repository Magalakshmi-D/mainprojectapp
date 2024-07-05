import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput,ImageBackground } from 'react-native';
import example from './android/app/src/main/assets/proconfig.json';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tracks = () => {
    // console.log(example.common.tracks.normal[1],'data');
    const data1 = example.common.tracks.normal[0];
    const objectEntries1 = Object.entries(data1);
    // console.log(objectEntries1);
    const [normal1, setNormal1] = useState(objectEntries1);
    // console.log(normal1[7][1],'7');
    const [toneData1, setToneData1] = useState(normal1[7][1]);
    console.log(toneData1, 'tones');
    const [editdata1, setEditData1] = useState(false);
    const edit1 = () => {
        console.log('edit1');
        setEditData1(true);
    }
    const update1 = () => {
        console.log('update1');
        setEditData1(false);
    }
    const submitData1=(index, newValue)=>{
        const updatedNormal1 = [...normal1];
        updatedNormal1[index][1] = newValue;
        setNormal1(updatedNormal1);
    }
    //           ======================================
    const [toneExpand1, setToneExpand1] = useState(false);
    const expand1 = () => {
        console.log('expand');
        setToneExpand1(!toneExpand1);
    }
    // =============================================
    const updateToneData1 = (rowIndex, columnIndex, newValue) => {
        const updatedToneData = [...toneData1];
        updatedToneData[rowIndex][columnIndex] = newValue;
        setToneData1(updatedToneData);
      };
    // ----------------------------------------------------------------------------------

    const data2 = example.common.tracks.normal[1];
    const objectEntries2 = Object.entries(data2);
    // console.log(objectEntries1);
    const [normal2, setNormal2] = useState(objectEntries2);
    // console.log(normal1[7][1],'7');
    const [toneData2, setToneData2] = useState(normal2[7][1]);
    console.log(toneData2, 'tones');
    const [editdata2, setEditData2] = useState(false);
    const edit2 = () => {
        console.log('edit2');
        setEditData2(true);
    }
    const update2 = () => {
        console.log('update2');
        setEditData2(false);
    }
    const submitData2=(index, newValue)=>{
        const updatedNormal1 = [...normal2];
        updatedNormal1[index][1] = newValue;
        setNormal2(updatedNormal1);
    }

    const [toneExpand2, setToneExpand2] = useState(false);
    const expand2 = () => {
        console.log('expand 2');
        setToneExpand2(!toneExpand2);
    }

    const updateToneData2 = (rowIndex, columnIndex, newValue) => {
        const updatedToneData = [...toneData2];
        updatedToneData[rowIndex][columnIndex] = newValue;
        setToneData2(updatedToneData);
    };

    const toPascalCase = str => str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join(' ');

    return (
        <ImageBackground
        source={require('./src/assets/image/back3.jpg')}
        style={styles.backgroundImage}
      >
        <ScrollView>
            <View style={styles.content}>
                <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                    {editdata1 === true ?
                        <AntDesign name={'checkcircleo'} size={28} color={'green'}
                            marginRight={20}
                            padding={8}
                            onPress={() => update1()}
                        /> :
                        <AntDesign name={'edit'} size={28} color={'green'}
                            marginRight={20}
                            padding={8}
                            onPress={() => edit1()}
                        />}
                </TouchableOpacity>
                {
                    normal1.map((item, index) => (
                        <View key={index} style={styles.item}>
                            <Text style={styles.keyText}>{toPascalCase(item[0])}</Text>
                            {item[0] === 'tones' ? (
                                <View>
                                    <AntDesign
                                        name={toneExpand1 === true ? 'upcircleo' : 'downcircleo'}
                                        marginLeft={toneExpand1 === true ? 91 : -78}
                                        size={25}
                                        color={'black'}
                                        onPress={() => expand1()}
                                    />
                                    {toneExpand1 === true ? (
                                        <View style={[styles.tableContainer, { margin: 20 }]}>
                                            <View style={styles.tableHeader}>
                                                <Text style={styles.headerCell}>Frequency</Text>
                                                <Text style={styles.headerCell}>MilliSecond</Text>
                                            </View>
                                            {toneData1.map((row, index) => (
                                                <View key={index} style={styles.tableRow}>
                                                    {editdata1 === true ?
                                                    <View style={{flexDirection:'row'}}>
                                                        <TextInput style={[styles.tableCell,{borderWidth:1,borderColor:'gray'}]} placeholder={`Enter Frequency`} onChangeText={(newValue) => updateToneData1(index, 0, newValue)}/>
                                                        <TextInput style={[styles.tableCell,{borderWidth:1,borderColor:'gray'}]} placeholder={`Enter Milliseconds`} onChangeText={(newValue) => updateToneData1(index, 1, newValue)}/>
                                                    </View>:
                                                    <View style={{flexDirection:'row'}}>
                                                        <Text style={styles.tableCell}>{row[0]}</Text>
                                                        <Text style={styles.tableCell}>{row[1]}</Text>
                                                    </View>
                                                    }
                                                </View>
                                            ))}
                                        </View>
                                    ) : null}
                                </View>
                            ) : editdata1 === false ? ( 
                                <Text style={styles.valueText}>{item[1].toString()}</Text>
                            ) :
                                <TextInput
                                    placeholder='Enter value'
                                    style={{
                                        flexDirection: 'row',
                                        marginLeft: 15,
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        width: 120,
                                        height: 40,
                                        borderRadius:5,backgroundColor:'#fdfdfd'
                                    }}
                                    onChangeText={(text) => submitData1(index, text)} 
                                    value={item[1].toString()} 
                                />
                            }
                        </View>
                    ))
                }
            </View>

            <View style={styles.content}>
                <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                    {editdata2 === true ?
                        <AntDesign name={'checkcircleo'} size={28} color={'green'}
                            marginRight={20}
                            padding={8}
                            onPress={() => update2()}
                        /> :
                        <AntDesign name={'edit'} size={28} color={'green'}
                            marginRight={20}
                            padding={8}
                            onPress={() => edit2()}
                        />}
                </TouchableOpacity>
                {
                    normal2.map((item, index) => (
                        <View key={index} style={styles.item}>
                            <Text style={styles.keyText}>{toPascalCase(item[0])}</Text>
                            {item[0] === 'tones' ? (
                                <View>
                                    <AntDesign
                                        name={toneExpand2 === true ? 'upcircleo' : 'downcircleo'}
                                        marginLeft={toneExpand2 === true ? 91 : -78}
                                        size={25}
                                        color={'black'}
                                        onPress={() => expand2()}
                                    />
                                    {toneExpand2 === true ? (
                                        <View style={[styles.tableContainer, { margin: 20 }]}>
                                            <View style={styles.tableHeader}>
                                                <Text style={styles.headerCell}>Frequency</Text>
                                                <Text style={styles.headerCell}>MilliSecond</Text>
                                            </View>
                                            {toneData2.map((row, index) => (
                                                <View key={index} style={styles.tableRow}>
                                                    {editdata2 === true ?
                                                    <View style={{flexDirection:'row'}}>
                                                        <TextInput style={[styles.tableCell,{borderWidth:1,borderColor:'gray'}]} placeholder={`Enter Frequency`} onChangeText={(newValue) => updateToneData2(index, 0, newValue)}/>
                                                        <TextInput style={[styles.tableCell,{borderWidth:1,borderColor:'gray'}]} placeholder={`Enter Milliseconds`} onChangeText={(newValue) => updateToneData2(index, 1, newValue)}/>
                                                    </View>:
                                                    <View style={{flexDirection:'row'}}>
                                                        <Text style={styles.tableCell}>{row[0]}</Text>
                                                        <Text style={styles.tableCell}>{row[1]}</Text>
                                                    </View>
                                                    }
                                                </View>
                                            ))}
                                        </View>
                                    ) : null}
                                </View>
                            ) : editdata2 === false ? ( 
                                <Text style={styles.valueText}>{item[1].toString()}</Text>
                            ) :
                                <TextInput
                                    placeholder='Enter value'
                                    style={{
                                        flexDirection: 'row',
                                        marginLeft: 15,
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        width: 120,
                                        height: 40,
                                        borderRadius:5,backgroundColor:'#fdfdfd'
                                    }}
                                    onChangeText={(text) => submitData2(index, text)} 
                                    value={item[1].toString()} 
                                />
                            }
                        </View>
                    ))
                }
            </View>
        </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1
    },
    content: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10
    },
    item: {
        flexDirection: 'row',
        marginBottom: 15,
        padding: 1,
    },
    keyText: {
        marginRight: 15,
        marginLeft:25,
        flex: 0.7,
        fontWeight: 'bold',
        color: 'black',
        fontWeight: '500'
    },
    valueText: {
        alignItems: 'flex-end',
        flex: 0.8
    },
    tableContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        // margin: 10,
        // padding: 5,
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'gray',
        // padding: 5,
    },
    headerCell: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'gray',
        // padding: 5,
    },
    tableCell: {
        // flex: 1,
        width: 100,
        textAlign: 'center',
    },
})
export default Tracks;