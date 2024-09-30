import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import Layout from '../components/layout/Layout';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import NowPlaying from '../components/NowPlaying';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.bgColor}>
      <StatusBar />
      <Layout>
        <ScrollView>
          <Header />
          <SearchBar />
          <NowPlaying />
        </ScrollView>
      </Layout>
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
