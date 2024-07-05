import React,{useState} from 'react';
import {View,Text,TextInput, TouchableOpacity,Image} from 'react-native';
import LabeledTextInput from './LableText';
import { CheckBox, Input } from 'react-native-elements';
import Toast from 'react-native-toast-message';

const CreatePass=({navigation,route})=>{
    const {emailaddress}=route.params;
    // console.log(emailaddress);
    
    const [text, setText] = React.useState(emailaddress);
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [password1,setPassword1] = useState('');
    const [password2,setPassword2] = useState('');

    const togglePasswordVisibility = () => {
        setVisiblePassword(!visiblePassword);
      };
    
      const showToast = () => {
        if (!text) {
            Toast.show({
              type: 'error',
              text1: 'Email address is required',
              position: 'top',
              visibilityTime: 2000,
            });
          } else if (!password1) {
            Toast.show({
              type: 'error',
              text1: 'Password is required',
              position: 'top',
              visibilityTime: 2000,
            });
          } else if (!password2) {
            Toast.show({
              type: 'error',
              text1: 'Confirm Password is required',
              position: 'top',
              visibilityTime: 2000,
            });
          } else {
            if(password1 === password2 && text === emailaddress){
                console.log('the both password same',password1,password2,emailaddress,text);
                Toast.show({
                    type: 'success',
                    text1: 'Your password has been successfully reset',
                    position: 'top',
                    visibilityTime: 2000,
                  });
                setText('');
                setPassword1('');
                setPassword2('');
                setTimeout(() => {
                    navigation.navigate('LoginScreen');
                }, 2500);
            }
            else if(text !== emailaddress){
                console.log(emailaddress,text);
                Toast.show({
                    type: 'error',
                    text1: 'Please enter register email address',
                    position: 'top',
                    visibilityTime: 2000,
                });
            }
            else{
                console.log('not matched',password1,password2);
                Toast.show({
                    type: 'error',
                    text1: 'Both Passwords must match',
                    position: 'top',
                    visibilityTime: 2000,
                  });
            }
          }
    };
    return(
        <View style={{flex:1,alignItems:'center',backgroundColor:'white'}}>
            <View>
                <Image source={require('./src/assets/image/unlock.png')} style={{ marginLeft:57,marginTop:10,width: 150, height: 150 }}/>
                <Text style={{fontSize:28,fontWeight:'bold',color:'#269591',marginTop:20}}>Create new password</Text>
                <Text style={{fontSize:16,marginTop:30,textAlign:'center'}}>Your new password must be different</Text>
                <Text style={{fontSize:16,textAlign:'center',marginBottom:10}}>from previous used password.</Text>
                <LabeledTextInput
                    label="Enter Email Address"
                    value={text}
                    onChangeText={setText}
                />
                <LabeledTextInput
                    label="Password"
                    value={password1}
                    onChangeText={setPassword1}
                    secureTextEntry={!visiblePassword}
                />
                <LabeledTextInput
                    label="Confirm Password"
                    value={password2}
                    onChangeText={setPassword2}
                    secureTextEntry={!visiblePassword}
                />
                {/* <Input
                    label="Password"
                    secureTextEntry={!visiblePassword}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                /> */}
                <CheckBox
                    title="Show password"
                    checked={visiblePassword}
                    onPress={togglePasswordVisibility}
                    containerStyle={{ backgroundColor: 'white' ,borderColor:'white',marginLeft:2,paddingLeft:-1}}
                    // containerStyle={{marginLeft:2}}
                />
                <TouchableOpacity onPress={showToast} style={{color:'black',marginTop:20,backgroundColor:'#269591',height:50,width:160,alignItems:'center',justifyContent:'center',marginLeft:50}}><Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Reset Password</Text></TouchableOpacity>
                <Toast ref={(ref) => Toast.setRef(ref)} />
            </View>
            
        </View>
    )
}

export default CreatePass;