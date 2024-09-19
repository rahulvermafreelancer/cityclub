import {View, Text} from 'react-native';
import React from 'react';
import {categoryData} from '../data/CategoryData';

const Categories = () => {
  return (
    <View>
      {categoryData?.map(item => (
        <View key={item._id}>
          <Text>Hi</Text>
          </View>
      ))}
    </View>
  );
};

export default Categories;
