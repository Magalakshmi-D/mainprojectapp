import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const CustomInput = ({ label, iconName, password, confirmPassword, onFocus = () => { }, placeHolder, error, keyBoardType, onChangeText, Width, margin, Value, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hidePasswords, setHidePasswords] = useState(password);
    return (
        <View style={{ marginBottom: margin == margin ? margin : 10, }} >
            <Text style={styles.label} >{label}</Text>
            <View style={[styles.inputContainer,
            {
                // marginVertical: margin ? margin : 20,
                borderColor: error ?
                    'red'
                    : isFocused
                        ? 'darkblue'
                        : 'light',
                width: Width ? Width : '100%',
                borderRadius: 10
            }
            ]}>
                <Icon name={iconName} size={22} color='darkBlue' style={{ marginRight: 10 }} />
                <TextInput
                    onChangeText={onChangeText}
                    keyboardType={keyBoardType}
                    secureTextEntry={hidePasswords}
                    autoCorrect={false}
                    placeholder={placeHolder}
                    value={Value}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => {
                        setIsFocused(false);
                    }}
                    style={{ color: 'darkblue', flex: 1 }}
                />
                {password && <Icon
                    onPress={() => setHidePasswords(!hidePasswords)}
                    name={hidePasswords ? 'eye-outline' : 'eye-off-outline'} size={22} color={'darkblue'} style={{ marginLeft: 10 }} />
                }
                {confirmPassword && <Icon
                    onPress={() => setHidePasswords(!hidePasswords)}
                    name={hidePasswords ? 'eye-outline' : 'eye-off-outline'} size={22} color={'darkblue'} style={{ marginLeft: 10 }} />
                }
            </View>
            <Text style={{ color: 'red', fontSize: 12, marginLeft:10, padding:2 }} >{error}</Text>
        </View>
    )
}

export default CustomInput;

const styles = StyleSheet.create({
    label: {
        // marginVertical: 2,
        fontSize: 18,
        color: 'black',
        // marginBottom: 10,
        marginLeft: 5,
        fontWeight: '500'

    },
    inputContainer: {
        height: 55,
        backgroundColor: 'light',
        flexDirection: "row",
        borderWidth: 0.5,
        paddingHorizontal: 15,
        alignItems: 'center',

    }
})