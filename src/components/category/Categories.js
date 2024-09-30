import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {categoryData} from '../../data/Data';

const Categories = () => {
  return (
    <View style={styles.categoryContainer}>
      {categoryData?.map(item => (
        <View key={item._id}>
          <TouchableOpacity>
            <Text style={styles.categoryTextColor}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryTextColor: {
    color: '#fff',
  },
  categoryContainer: {},
});

export default Categories;
