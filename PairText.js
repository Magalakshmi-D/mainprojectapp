import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const DataList = () => {
  const [data, setData] = useState([[1, 2], [3, 4]]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedValue1, setEditedValue1] = useState('');
  const [editedValue2, setEditedValue2] = useState('');
  const [newPairValue1, setNewPairValue1] = useState('');
  const [newPairValue2, setNewPairValue2] = useState('');

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedValue1(data[index][0].toString());
    setEditedValue2(data[index][1].toString());
  };

  const handleSaveClick = () => {
    if (editingIndex !== null) {
      const updatedData = [...data];
      updatedData[editingIndex] = [parseInt(editedValue1), parseInt(editedValue2)];
      setData(updatedData);
      setEditingIndex(null);
    }
  };

  const handleDeleteClick = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  const handleAddClick = () => {
    const newPair = [parseInt(newPairValue1), parseInt(newPairValue2)];
    setData([...data, newPair]);
    setNewPairValue1('');
    setNewPairValue2('');
  };

  return (
    <View>
      {data.map((pair, index) => (
        <View key={index} style={styles.pairContainer}>
          {editingIndex === index ? (
            <>
              <TextInput
                style={styles.input}
                value={editedValue1}
                onChangeText={setEditedValue1}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                value={editedValue2}
                onChangeText={setEditedValue2}
                keyboardType="numeric"
              />
              <TouchableOpacity style={styles.saveButton} onPress={handleSaveClick}>
                <Text>Save</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.pairText}>{pair[0]}</Text>
              <Text style={styles.pairText}>{pair[1]}</Text>
              <TouchableOpacity style={styles.editButton} onPress={() => handleEditClick(index)}>
                <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteClick(index)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      ))}

      <View style={styles.addPairContainer}>
        <TextInput
          style={styles.input}
          value={newPairValue1}
          onChangeText={setNewPairValue1}
          keyboardType="numeric"
          placeholder="Enter Value 1"
        />
        <TextInput
          style={styles.input}
          value={newPairValue2}
          onChangeText={setNewPairValue2}
          keyboardType="numeric"
          placeholder="Enter Value 2"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddClick}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pairContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  pairText: {
    fontSize: 18,
    marginRight: 10,
  },
  editButton: {
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: 'lightgreen',
    padding: 5,
    borderRadius: 5,
  },
  addPairContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  addButton: {
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 8,
    flex: 1,
  },
});

export default DataList;
