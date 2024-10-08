import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import NowPlaying from '../components/NowPlaying';
import ComingSoon from '../components/ComingSoon';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.bgColor}>
      <StatusBar />
      <ScrollView>
        <Header />
        <SearchBar />
        <NowPlaying />
        <ComingSoon />
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
