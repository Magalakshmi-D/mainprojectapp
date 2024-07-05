import React from 'react';
import { View, TextInput,Text } from 'react-native';
// import { Text } from 'react-native-paper';

const LabeledTextInput = ({ label, ...rest }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const containerStyle = {
    borderColor: isFocused ? '#269591' : 'black', //  #00bcd4
    // borderColor:error ? COLORS.red:isFocused? '#82a0b9':'#cdd9e3'
    borderWidth: 1,
    paddingHorizontal: 12,
  };

  const labelStyle = {
    position: 'absolute',
    left: 20,
    top: isFocused || rest.value ? -8 : 11,
    fontSize: isFocused || rest.value ? 12 : 14,
    color: isFocused ? '#269591' : '#aaa',
    backgroundColor: 'white',
    paddingHorizontal: 4,
  };

  return (
    <View style={{ paddingTop: 18 }}>
      <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          style={{ height: 50 }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </View>
    </View>
  );
};

export default LabeledTextInput;
