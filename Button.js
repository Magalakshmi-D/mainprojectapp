import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import COLORS from './color';

const Button =({title,onPress=()=>{}}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={{height:55,width:'40%',borderRadius:5,backgroundColor: '#2986CC',justifyContent:'center',alignItems:'center',marginVertical:20,marginHorizontal:15}}>
            <Text style={{color:COLORS.white,fontWeight:'bold',fontSize:18,padding:10}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;