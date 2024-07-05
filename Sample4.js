import React from 'react';
import {View,Text} from 'react-native';

const Sample4=()=>{
    const Actors = [
        {
          name: "Tom Cruise",
          age: 56,
          "Born At": "Syracuse, NY",
          Birthdate: "July 3, 1962",
          photo: "https://jsonformatter.org/img/tom-cruise.jpg",
        },
        {
          name: "Robert Downey Jr.",
          age: 53,
          "Born At": "New York City, NY",
          Birthdate: "April 4, 1965",
          photo: "https://jsonformatter.org/img/Robert-Downey-Jr.jpg",
        },
      ];
    const data={'name':'maha','age':'23'};
    return(
        <View>
            <Text>Hello</Text>
            {data.map((d,index)=>{
                <Text key={index}>{d}</Text>
            })}
        </View>
    )
}
export default Sample4;
