import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, SafeAreaView, ImageBackground, Alert,ScrollView, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native';
import Input from './input';
import Loader from './Loader';

const RegistrationScreen = ({navigation}) => {
    const [inputs, setInputs] = React.useState({
        email: '',
        fullname: '',
        phone: '',
        password: '',
    })
    const [errors, setErrors] = React.useState({});
    const [loading,setLoading]=React.useState(false);
    const validate=()=>{
        let valid=true;
        if(!inputs.email){
            handleError('Please enter email','email');
            valid=false;
        }
        else if(!(/\S+@\S+\.+com+/.test(inputs.email))){  //(/\S+@gmail+\.+com+/)
            handleError('Please enter valid email','email');
            valid=false;
        }
        if(!inputs.fullname){
            handleError('Please enter fullname','fullname');
            valid=false;
        }
        if(!inputs.phone){
            handleError('Please enter phone','phone');
            valid=false;
        }
        else if(inputs.phone.length <10){
            handleError('Please enter correct phone number','phone');
            valid=false;
        }
        if(!inputs.password){
            handleError('Please enter password','password');
            valid=false;
        }
        else if(inputs.password.length <5){
            handleError('Minimum password length is 5','password');
            valid=false;
        }
        if(valid){
            register();
        }
    };
    const register =()=>{
        setLoading(true);
        Alert.alert('Thankyou for Registering! ');
        setTimeout(()=>{
            setLoading(false);
            try {
                AsyncStorage.setItem("user",JSON.stringify(inputs));
                navigation.navigate('LoginScreen');
            } catch (error) {
                Alert.alert('Error','Something went wrong');
            }
        },3000);
    };
    const handleOnChange =(text,input)=>{
        setInputs(prevState =>({...prevState,[input]:text}));
    };
    const handleError = (errorMessage, input) => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };

    // const image = { uri: 'https://www.planstudyabroad.uniagents.com/images/login.png' };
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Loader visible={loading}/>
            <View style={{ height: '30%', width: '100%', }} >
                <ImageBackground source={require('./src/assets/image/register.png')} resizeMode="cover" style={styles.image}>
                </ImageBackground>
            </View>
            <View style={styles.outsideContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginVertical: 0, width: '100%', paddingHorizontal: 30, }}>
                        <Text style={{
                            color: '#073763',
                            fontSize: 30,
                            fontWeight: '600',
                            textAlign: 'center',
                            textShadowColor: 'rgba(0, 0, 0, 0.55)',
                            textShadowOffset: { width: 5, height: 5 },
                            textShadowRadius: 40,
                        }} >
                            Register
                        </Text>
                        <Input placeholder="Enter your email address" iconName="email-outline" label="Email" error={errors.email} onFocus={() => { handleError(null, 'email'); }} onChangeText={text => handleOnChange(text, 'email')} />
                        <Input placeholder="Enter your Fullname" iconName="account-outline" label="Fullname" error={errors.fullname} onFocus={() => { handleError(null, 'fullname'); }} onChangeText={text => handleOnChange(text, 'fullname')} />
                        <Input keyboardType='numeric' placeholder="Enter your Phone Number" iconName="phone-outline" label="Phone Number" maxLength={10} error={errors.phone} onFocus={() => { handleError(null, 'phone'); }} onChangeText={text => handleOnChange(text, 'phone')} />
                        <Input placeholder="Enter your Password" iconName="lock-outline" label="Password" error={errors.password} onFocus={() => { handleError(null, 'password'); }} onChangeText={text => handleOnChange(text, 'password')} password />
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>validate()} style={{height:55,width:'40%',borderRadius:5,backgroundColor:'#0a5193',justifyContent:'center',alignItems:'center',marginVertical:0,marginHorizontal:15}}>
                                    <Text style={{color:'white',fontWeight:'bold',fontSize:18,padding:10}}>SignUp</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    outsideContainer: {
        height: '75%',
        width: '100%',
        paddingHorizontal: 10,
        // borderWidth: 1,
        // borderColor: 'blue',
        // borderRadius: 25,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        // backgroundColor: 'red'
    },
    text: {
        color: '#073763',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 10,
        borderBottomWidth: 1, borderColor: 'black',
    },
})
export default RegistrationScreen;