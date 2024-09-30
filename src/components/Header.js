import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerView}>
      <View style={styles.herderDetails}>
        <Text style={styles.headerText}>Hi, Angelina 👋</Text>
        <Text style={styles.headText}>Welcome back</Text>
      </View>
      <TouchableOpacity style={styles.herderDetails}>
        <Image source={require('../assets/img/bell.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    marginHorizontal: '2%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  herderDetails: {
    margin: '2%',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  headText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Header;
