import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {View,Text,SafeAreaView,ImageBackground,ScrollView,StyleSheet,Alert,TextInput, Touchable, TouchableOpacity} from 'react-native';
import Input from './input';
import Button from './Button';
import Loader from './Loader';

const LoginScreen=({navigation})=>{
    const [inputs,setInputs]=React.useState({
        email:'',
        fullname:'',
        phone:'',
        password:'',
    })
    const [errors,setErrors]=React.useState({});
    const [loading,setLoading]=React.useState(false);
    const handleInputChange = (inputName, inputValue) => {
        setInputs({...inputs, [inputName]: inputValue});
    }
    const handleError =(errorMessage,input)=>{
        setErrors(prevState=>({...prevState,[input]:errorMessage}));
    };

    const validate=()=>{
        console.log('validate');
        let valid=true;
        if(!inputs.email){
            handleError('Please enter email','email');
            valid=false;
        }
        if(!inputs.password){
            handleError('Please enter password','password');
            valid=false;
        }
        if(valid){
            login();
        }
        setInputs({...inputs, email: '',password:''});
        console.log(inputs);
    }
    const login=()=>{
        // console.log('login ..');
        setLoading(true);
        setTimeout(async()=>{
            setLoading(false);
            let userData=await AsyncStorage.getItem('user');
            console.log(userData,'user data');
            if(userData){
                userData=JSON.parse(userData);
                if(inputs.email == userData.email && inputs.password == userData.password){
                    AsyncStorage.setItem("user",JSON.stringify({...userData,loggedIn:true}),
                    );
                    navigation.navigate('DrawerHome',{name:userData.fullname});
                }
                else{
                    Alert.alert('Error','Please enter correct email & password');
                }
            }
                else{
                Alert.alert('Error','User Does not exist');
            }
        },3000);
    }
    const signup=()=>{
        console.log('signup');
        navigation.navigate('RegistrationScreen');
    }
    const image = { uri: 'https://www.planstudyabroad.uniagents.com/images/login.png' };
    return(
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Loader visible={loading}/>
            <View style={{ height: '35%', width: '100%', }} >
                <ImageBackground source={image} resizeMode='cover' style={styles.image}>
                </ImageBackground>
            </View>
            <View style={styles.outsideContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginVertical: 20, width: '100%', paddingHorizontal: 20, }}>
                    <Text style={{
                            color: '#073763',
                            fontSize: 30,
                            fontWeight: '600',
                            textAlign: 'center',
                            textShadowColor: 'rgba(0, 0, 0, 0.55)',
                            textShadowOffset: { width: 5, height: 5 },
                            textShadowRadius: 40,
                        }} >
                            Login
                        </Text>
                        <Input placeholder="Enter your email address" iconName="email-outline" label="Email" error={errors.email} onFocus={()=>{handleError(null,'email'); }} value={inputs.email} onChangeText={text => handleInputChange('email', text)}/>
                        <Input placeholder="Enter your Password" iconName="lock-outline" label="Password"  error={errors.password} onFocus={()=>{handleError(null,'password'); }} value={inputs.password} onChangeText={text => handleInputChange('password', text)} password />
                        <View style={{flexDirection:'row'}}>
                            <Button title='  Login ' onPress={()=>validate()}/> 
                            <TouchableOpacity onPress={()=>signup()} style={{height:55,width:'40%',borderRadius:5,backgroundColor:'#69c569',justifyContent:'center',alignItems:'center',marginVertical:20,marginHorizontal:15}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:18,padding:10}}>SignUp</Text>
                            </TouchableOpacity> 
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '8%', }} >
                            <Text
                                onPress={() => { navigation.navigate("Forgot"); }}
                                style={styles.text}>
                                Forgot Passsword
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}


const styles=StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    outsideContainer: {
        height: '65%',
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
export default LoginScreen;