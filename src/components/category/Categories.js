import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {categoryData} from '../../data/Data';

const Categories = () => {
  return (
    <View>
      {categoryData?.map(item => (
        <View key={item._id}>
          <TouchableOpacity>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Categories;
