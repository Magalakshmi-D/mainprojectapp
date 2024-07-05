import React,{useState} from 'react';
import {View,Text,Image,StatusBar,TouchableOpacity} from 'react-native';
// import Input from '../components/input';
import { CheckBox, Input } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CreatPass from './CreatePass';

const Forgot=({navigation})=>{
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const leftArrow=()=>{
        console.log('You click left arrow');
        navigation.navigate("LoginScreen");
    }
    const forgot=()=>{
        if (email.trim() === '') {
            setError('Please enter a value');
        } else if(!(/\S+@\S+\.+com+/.test(email))) {
            setError('Please enter correct email')
        }
        else{
            setError('');
            setEmail('');
            navigation.navigate("CreatePass",{emailaddress:email});
        }   
    }
    return(
        <View>
            <View>
                <TouchableOpacity onPress={leftArrow}>
                    <Text style={{marginTop:15,paddingLeft:9}}><AntDesign name="arrowleft" size={25} color="black" /></Text>
                </TouchableOpacity>
            </View>
            <Text style={{alignItems:'center',textAlign:'center',fontWeight:'bold',fontSize:28,marginTop:70,letterSpacing:3,color:'#269591'}}>Forgot Password</Text>
            <View>
                <Image source={require('./src/assets/image/reset.jpg')} style={{ marginLeft:110,marginTop:10,width: 200, height: 200 }}/>
            </View>
            <View>    
                <Text style={{textAlign:'center',fontSize:17}}>Enter the email address</Text>
                <Text style={{textAlign:'center',fontSize:17,marginBottom:40}}>associated with your account.</Text>
                {error !== '' && <Text style={{ color: 'red',paddingLeft:15,marginLeft:40 }}>{error}</Text>}
                <Input
                    placeholder='Enter Email Address'
                    containerStyle={{ width: 300 ,marginLeft:40}}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TouchableOpacity onPress={forgot} style={{marginTop:20,backgroundColor:'#269591',height:45,width:140,justifyContent:'center',alignItems:'center',marginLeft:120}}><Text style={{color:'white',fontSize:16}}>Continue</Text></TouchableOpacity>    
            </View>
        </View>
    )
}

export default Forgot;