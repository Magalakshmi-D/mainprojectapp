import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground,TouchableOpacity, Image, Modal, ScrollView, TextInput, Pressable } from 'react-native';
import example from './android/app/src/main/assets/proconfig.json';

const BackPlane = () => {
    const data = example.devices;
    const device = data[1].backplane.vpd;
    // console.log(device);
    const [backplane, setBackPlane] = useState(device);
    // console.log(backplane);
    // const [back, setBack] = useState({
    //     product: '',
    //     board: '',
    //     hardware: '',
    //     batchcode: '',
    //     uid: '',
    //     software: '',
    //     communicationPort: '',
    //     defineAddress: '',
    //     startAddress: '',
    //     defineLength: '',
    //     startLength: '',
    // });
    // const [showwarning, setShowwarning] = useState(false);
    function convertToTitleCase(str) {
        const words = str.split('_');
        const titleCaseStr = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return titleCaseStr;
    }
    // const edit = () => {
    //     console.log('edit');
    //     setShowwarning(true);
    // }
    // const submit = (product,board,hardware,batchcode,uid,software,communicationPort,defineAddress,startAddress,defineLength,startLength) => {
    //     console.log('submit', product,board,hardware,batchcode,uid,software,communicationPort,defineAddress,startAddress,defineLength,startLength); 
    //     const updatedata={...backplane,"prod_signature":product,"board_id":board,"hardware_version":hardware,"batch_code":batchcode,"uid":uid,"software_version":software,"comm_port":communicationPort,"config_define_addr":defineAddress,"config_start_addr":startAddress,"config_define_len":defineLength,"config_start_len":startLength};
    //     console.log(updatedata,'update');
    //     setBackPlane(updatedata);
    //     setBack({ product: '' });
    //     setShowwarning(false);
    // }
    return (
        <ImageBackground
        source={require('./src/assets/image/back3.jpg')}
        style={styles.backgroundImage}
      >
        <View>
            {/* <Modal visible={showwarning} transparent onRequestClose={() => setShowwarning(false)} animationType="fade" >
                <View style={styles.centered_view}>
                    <ScrollView contentContainerStyle={styles.warning_modal}>
                        <TouchableOpacity onPress={() => setShowwarning(false)}>
                            <Text style={{ paddingLeft: 2, marginTop: -10, marginLeft: 310, color: 'black', width: 30, textAlign: 'center', borderRadius: 2, borderWidth: 1, borderColor: 'black' }}>X</Text>
                        </TouchableOpacity>
                        <Text style={{ marginBottom: 10, fontSize: 23, color: '#0b5394', fontWeight: 'bold' }}>Update</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Product Signature:</Text>
                            <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4', marginLeft: 73 }} placeholder='Enter' value={back.product} onChangeText={(value) => setBack({ ...back,product: value })} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Board Id:</Text>
                            <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4', marginLeft: 140 }} placeholder='Enter' value={back.board} onChangeText={(value) => setBack({ ...back,board:value})} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Hardware Version:</Text>
                            <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4', marginLeft: 75 }} placeholder='Enter' value={back.hardware} onChangeText={(value) => setBack({ ...back,hardware:value})} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Batch Code:</Text>
                            <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4', marginLeft: 117 }} placeholder='Enter' value={back.batchcode} onChangeText={(value) => setBack({ ...back,batchcode:value})} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>UUD:</Text>
                            <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4', marginLeft: 167 }} placeholder='Enter' value={back.uid} onChangeText={(value) => setBack({ ...back,uid:value})} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Software Version:</Text>
                            <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4', marginLeft: 77 }} placeholder='Enter' value={back.software} onChangeText={(value) => setBack({ ...back,software:value})} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Communication Port:</Text>
                            <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4', marginLeft: 55 }} placeholder='Enter' value={back.communicationPort} onChangeText={(value) => setBack({ ...back,communicationPort:value})} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Configration Define Address:</Text>
                            <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4' }} placeholder='Enter' value={back.defineAddress} onChangeText={(value) => setBack({ ...back,defineAddress:value})} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Configration Start Address:</Text>
                            <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4', marginLeft: 9 }} placeholder='Enter' value={back.startAddress} onChangeText={(value) => setBack({ ...back,startAddress:value})} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Configration Define Length:</Text>
                            <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4', marginLeft: 5 }} placeholder='Enter' value={back.defineLength} onChangeText={(value) => setBack({ ...back,defineLength:value})} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Configration Start Length:</Text>
                            <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4', marginLeft: 14 }} placeholder='Enter' value={back.startLength} onChangeText={(value) => setBack({ ...back,startLength:value})} />
                        </View>
                        <Pressable style={{ borderRadius: 4, backgroundColor: '#539ed6', padding: 5, marginTop: 20, width: 50, alignItems: 'center' }} onPress={() => submit(back.product,back.board,back.hardware,back.batchcode,back.uid,back.software,back.communicationPort,back.defineAddress,back.startAddress,back.defineLength,back.startLength)} >
                            <Text style={{ padding: 5, color: 'white' }}>OK</Text>
                        </Pressable>
                    </ScrollView>
                </View>
            </Modal> */}
            <View style={{ justifyContent:'center',alignItems:'center',display:'flex'}}>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 25,margin:20}}>BackPlane</Text>
                {/* <TouchableOpacity style={styles.imageContainer} onPress={edit}>
                    <Image source={require('./src/assets/image/edit-document.png')} style={styles.bluetoothImage} resizeMode="cover"></Image>
                </TouchableOpacity> */}
            </View>
            <View style={styles.container}>
                {Object.entries(backplane).map(([key, value], index) => (
                    <View key={key} style={styles.item}>
                        <Text style={styles.keyText}>{convertToTitleCase(key)} </Text>
                        <Text style={styles.valueText}>{String(value)}</Text>
                    </View>
                ))}
            </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1
    },
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
        flex: 0.8
    },
    imageContainer: {
        flex:1,
        marginLeft: 100,
        marginTop: 50,
        marginBottom: 20,
    },
    bluetoothImage: {
        width: 30,
        height: 30,
    },
    centered_view: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
    },
    warning_modal: {
        width: 384,
        height: 1000,
        backgroundColor: '#ffffff',
        // borderWidth:1,
        // borderColor:'#000',
        // borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:150
    },
})
export default BackPlane;