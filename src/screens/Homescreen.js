import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.bgColor}>
      <StatusBar />
      <ScrollView>
        <Header />
        <SearchBar />
      </ScrollView>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: '#000000',
    flex: 1,
  },
});
export default HomeScreen;
