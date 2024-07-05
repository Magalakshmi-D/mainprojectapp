// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';

// const Sample2 = () => {
//   const [orientation, setOrientation] = useState('portrait');

//   const handleOrientationChange = () => {
//     const { width, height } = Dimensions.get('window');
//     setOrientation(width < height ? 'portrait' : 'landscape');
//   };

//   useEffect(() => {
//     Dimensions.addEventListener('change', handleOrientationChange);

//     return () => {
//       Dimensions.removeEventListener('change', handleOrientationChange);
//     };
//   }, []);

//   return (
//     <View style={[styles.container, orientation === 'portrait' ? styles.portrait : styles.landscape]}>
//       <Text>Hello, World!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   portrait: {
//     backgroundColor: 'lightblue',
//   },
//   landscape: {
//     backgroundColor: 'lightgreen',
//   },
// });

// export default Sample2;

// press the text will small to high

import React, { useState } from 'react';
import { View,TouchableOpacity, Text, StyleSheet } from 'react-native';


const MyText = () => {
  const [isTouched, setIsTouched] = useState(false);

  const handlePressIn = () => {
    setIsTouched(true);
  };

  const handlePressOut = () => {
    setIsTouched(false);
  };

  return (
    <View>
      <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.7} // Opacity when the text is touched
    >
      <Text style={[styles.text, { fontSize: isTouched ? 20 : 16 }]}>
        Press Me to Change Size
      </Text>
    </TouchableOpacity>
    </View>
    
  );
};

export default MyText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
})
