import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const YourComponent = () => {
  // Sample data, replace this with your actual data
  const data = [[["group", 1], ["channels-phasedelay", "T1:0, T2:500, T3:1000, T4:1500"], ["force_enable", true]], [["group", 2], ["channels-phasedelay", "T5:0, T6:0, T7:0, T8:0"], ["force_enable", false]], [["group", 3], ["channels-phasedelay", "T9:100, T10:200, T11:300, T12:400"], ["force_enable", false]], [["group", 4], ["channels-phasedelay", "T13:500, T14:700, T15:100, T16:350"], ["force_enable", false]]];

  return (
    <View style={styles.container}>
      {/* Loop through the data */}
      {data.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text>{item[0][0]} {item[0][1]}</Text>
          <Text>{item[1][0]} {item[1][1]}</Text>
          <Text>{item[2][0]} {item[2][1]} </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Style the main container as per your requirements
    padding: 20,
    backgroundColor: '#e0e0e0',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  itemContainer: {
    // Style the box container for each item
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default YourComponent;
