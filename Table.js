// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Table = () => {
//   const data = [[1, 20], [2, 34], [3, 56]];
//   return (
//     <View style={styles.tableContainer}>
//       <View style={styles.tableHeader}>
//         <Text style={styles.headerCell}>Column 1</Text>
//         <Text style={styles.headerCell}>Column 2</Text>
//       </View>
//       {data.map((row, index) => (
//         <View key={index} style={styles.tableRow}>
//           <Text style={styles.tableCell}>{row[0]}</Text>
//           <Text style={styles.tableCell}>{row[1]}</Text>
//         </View>
//       ))}
//     </View>
//   )
// }


// const styles = StyleSheet.create({
//   tableContainer: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     margin: 10,
//     padding: 5,
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderColor: 'gray',
//     padding: 5,
//   },
//   headerCell: {
//     flex: 1,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   tableRow: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderColor: 'gray',
//     padding: 5,
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: 'center',
//   },
// });





// export default Table;



import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const YourComponent = () => {
  const [inputs, setInputs] = useState([
    { text: '', filled: false },
    { text: '', filled: false },
    { text: '', filled: false },
    // Add more objects for each TextInput you have
  ]);

  const handleChangeText = (text, index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index].text = text;
    updatedInputs[index].filled = true;

    setInputs(updatedInputs);
  };

  return (
    <View>
      {inputs.map((input, index) => (
        <TextInput
          key={index}
          placeholder={`Enter value ${index + 1}`}
          placeholderTextColor={input.filled ? 'gray' : 'black'}
          style={styles.textInput}
          onChangeText={(text) => handleChangeText(text, index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    height: 40,
    marginBottom: 10,
  },
});

export default YourComponent;
