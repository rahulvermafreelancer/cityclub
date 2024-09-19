import React from 'react';
import {View} from 'react-native';
import Header from './Header';
import TabBar from './TabBar';

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <View>{children}</View>
      <TabBar />
    </>
  );
};

export default Layout;
