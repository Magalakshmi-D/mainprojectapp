import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const data_two = {
  maha_lakshmi: 123,
  some_other_key: "hello",
  another_key: true,
};

const UpdateableText = ({ keyName, value, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedValue, setUpdatedValue] = useState(value);

  const handleEdit = () => {
    setIsEditing(true);
    setUpdatedValue(value);
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdate(keyName, updatedValue);
  };

  return (
    <View style={styles.textContainer}>
      {isEditing ? (
        <TextInput
          style={styles.textInput}
          value={updatedValue}
          onChangeText={setUpdatedValue}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <TouchableOpacity onPress={handleEdit}>
          <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const Tracks = () => {
  const [data, setData] = useState(data_two);

  const handleUpdate = (key, updatedValue) => {
    setData((prevData) => ({
      ...prevData,
      [key]: updatedValue,
    }));
  };

  return (
    <View style={styles.container}>
      {Object.entries(data).map(([key, value]) => (
        <UpdateableText key={key} keyName={key} value={value} onUpdate={handleUpdate} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  textInput: {
    fontSize: 18,
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});

export default Tracks;
