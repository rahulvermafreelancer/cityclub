import React from 'react';
import {View, SafeAreaView, Text, StatusBar} from 'react-native';
import Layout from '../components/layout/Layout';
import SearchBar from '../components/SearchBar';
import Categories from '../components/category/Categories';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Layout>
        <SearchBar />
        <Categories />
        <View>
          <Text>Hello from HomeScreen</Text>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default HomeScreen;
