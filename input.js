import React,{useState} from "react";
import {View,Text,StyleSheet,TextInput} from 'react-native';
import COLORS from "./color";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input =({label,iconName,error,password,onFocus=()=>{},...props})=>{
    const [isFocused,setIsFocused]=React.useState(false);
    const [hidePassword,setHidePassword]=React.useState(password);
    return(
        <View style={{marginBottom:20}}>
            <Text style={style.label}>{label}</Text>
            <View style={[style.inputContainer,{borderColor:error ? COLORS.red:isFocused? '#82a0b9':'#cdd9e3'}]}>
                <Icon name={iconName} style={{fontSize:22,color:'#16537e',marginRight:10}}/>
                <TextInput secureTextEntry={hidePassword} autoCorrect={false}
                 onFocus={()=>{
                    onFocus();
                    setIsFocused(true);
                }} 
                 onBlur={()=>{
                    setIsFocused(false);
                 }}
                 style={{color:'#16537e',flex:1}} {...props} />
                 {password && 
                 <Icon
                 onPress={()=>setHidePassword(!hidePassword)}
                 style={{fontSize:22,color:'#16537e'}}
                 name={hidePassword ? 'eye-outline':'eye-off-outline'}/>}
                 
            </View>
            {error && (
                <Text style={{color:COLORS.red,fontSize:12,marginTop:7}}>{error}</Text>
            )}
        </View>
    )
}

const style=StyleSheet.create({
    label:{
        marginVertical:5,
        fontSize:14,
        color:'#064273',
        fontWeight:'400'
    },
    inputContainer:{
        height:55,
        backgroundColor:'white',
        flexDirection:'row',
        paddingHorizontal:15,
        borderWidth:1.5,
        alignItems:'center',
        width:300,borderRadius:5
    }
});
export default Input;