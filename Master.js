import React, { useState } from 'react';
import { View, Text, ScrollView,StyleSheet, ImageBackground } from 'react-native';
import example from './android/app/src/main/assets/proconfig.json';

const Master = () => {
  const data = example.devices;
  const datakey = ["Product signature", "Board id", "Hardware version", "Batch code", "UUD", "Software Version", "Communication Port", "Configration define address", "Configration start address", "Configration define length", "Configration start length"];
  const device = data[0].master.vpd;
  const [master, setMaster] = useState(device);
  console.log(master);
  // const [showwarning, setShowwarning] = useState(false);
  // const [product,setProduct] = useState('');
  // const [board,setBoard]=useState('');
  // const [hardware,setHardWare]=useState('');
  // const [batchcode,setBatchCode]=useState('');
  // const [uid,setUid]=useState('');
  // const [software,setSoftware]=useState('');
  // const [communicationPort,setCommunicationPort]=useState('');
  // const [defineAddress,setDefineAddress]=useState('');
  // const [startAddress,setStartAddress]=useState('');
  // const [defineLength,setDefineLength]=useState('');
  // const [startLength,setStartLength]=useState('');
  
  // const edit = () => {
  //   // console.log('edit');
  //   setShowwarning(true);
  // }
  // const submit=(product,board,hardware,batchcode,uid,software,communicationPort,defineAddress,startAddress,defineLength,startLength)=>{
  //   console.log('product is submit');
  //   // console.log(product,board,hardware,batchcode,uid,software,communicationPort,defineAddress,startAddress,defineLength,startLength);
  //   setProduct('');
  //   setBoard('');
  //   setHardWare('');
  //   setBatchCode('');
  //   setUid('');
  //   setSoftware('');
  //   setCommunicationPort('');
  //   setDefineAddress('');
  //   setStartAddress('');
  //   setDefineLength('');
  //   setStartLength('');
  //   const updatedata={...master,"prod_signature":product,"board_id":board,"hardware_version":hardware,"batch_code":batchcode,"uid":uid,"software_version":software,"comm_port":communicationPort,"config_define_addr":defineAddress,"config_start_addr":startAddress,"config_define_len":defineLength,"config_start_len":startLength};
  //   // console.log(updatedata,'update');
  //   setMaster(updatedata);
  //   setShowwarning(false);
  // }
  return (
    <ImageBackground
        source={require('./src/assets/image/back3.jpg')}
        style={styles.backgroundImage}
      >
    <View>
      {/* <Modal visible={showwarning} transparent onRequestClose={() => setShowwarning(false)} animationType='slide' >
        <View style={styles.centered_view}>
          <ScrollView contentContainerStyle={styles.warning_modal}>
            <TouchableOpacity onPress={() => setShowwarning(false)}>
              <Text style={{ paddingLeft: 2, marginTop: 4, marginLeft: 310, color: 'black', width: 30, textAlign: 'center', borderRadius: 2, borderWidth: 1, borderColor: 'black' }}>X</Text>
            </TouchableOpacity>
            <Text style={{ marginBottom: 10, fontSize: 23, color: '#0b5394', fontWeight: 'bold' }}>Update</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center',marginTop: 10 }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Product Signature:</Text>
              <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4',marginLeft:73 }} placeholder='Enter' value={product} onChangeText={(value)=>setProduct(value)}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignItems: 'center',marginTop: 10 }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Board Id:</Text>
              <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4',marginLeft:140 }} placeholder='Enter' value={board} onChangeText={(value)=>setBoard(value)}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Hardware Version:</Text>
              <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4' ,marginLeft:75}} placeholder='Enter' value={hardware} onChangeText={(value)=>setHardWare(value)}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Batch Code:</Text>
              <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4',marginLeft:117 }} placeholder='Enter' value={batchcode} onChangeText={(value)=>setBatchCode(value)}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>UUD:</Text>
              <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4',marginLeft:167 }} placeholder='Enter' value={uid} onChangeText={(value)=>setUid(value)}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Software Version:</Text>
              <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4' ,marginLeft:77}} placeholder='Enter' value={software} onChangeText={(value)=>setSoftware(value)}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Communication Port:</Text>
              <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4',marginLeft:55 }} placeholder='Enter' value={communicationPort} onChangeText={(value)=>setCommunicationPort(value)}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Configration Define Address:</Text>
              <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4' }} placeholder='Enter' value={defineAddress} onChangeText={(value)=>setDefineAddress(value)}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Configration Start Address:</Text>
              <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4',marginLeft:9 }} placeholder='Enter' value={startAddress} onChangeText={(value)=>setStartAddress(value)}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Configration Define Length:</Text>
              <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4' ,marginLeft:5}} placeholder='Enter' value={defineLength} onChangeText={(value)=>setDefineLength(value)}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 21, fontSize: 15 }}>Configration Start Length:</Text>
              <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 110, height: 40, borderRadius: 5, backgroundColor: '#f4f4f4',marginLeft:14 }} placeholder='Enter' value={startLength} onChangeText={(value)=>setStartLength(value)}/>
            </View>
            <Pressable style={{ borderRadius: 4, backgroundColor: '#539ed6', padding: 5, marginTop: 20, width: 50, alignItems: 'center' }} onPress={() =>submit(product,board,hardware,batchcode,uid,software,communicationPort,defineAddress,startAddress,defineLength,startLength)} >
              <Text style={{ padding: 5, color: 'white' }}>OK</Text>
            </Pressable>
          </ScrollView>
        </View>
      </Modal> */}
      <View style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 25,margin:20}}>Master</Text>
        {/* <TouchableOpacity style={styles.imageContainer} onPress={edit}>
          <Image source={require('./src/assets/image/edit-document.png')} style={styles.bluetoothImage} resizeMode="cover"></Image>
        </TouchableOpacity> */}
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {Object.entries(master).map(([key, value], index) => (
          <View key={key + index} style={styles.item}>
            <Text style={styles.keyText}>{datakey[index]} </Text>
            <Text style={styles.valueText}>{String(value)}</Text>
          </View>
        ))}
      </ScrollView>

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
    color:'black'
  },
  valueText: {
    alignItems: 'flex-end',
    flex: 0.8
  },
  imageContainer: {
    marginLeft: 100,
    marginTop: 50,
    marginBottom: 20,
    flex:1
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
    height: 700,
    backgroundColor: '#ffffff',
    // borderWidth:1,
    // borderColor:'#000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:60
  },
})
export default Master;


