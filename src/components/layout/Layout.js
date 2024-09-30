import React from 'react';
import {View} from 'react-native';
import TabBar from './TabBar';

const Layout = ({children}) => {
  return (
    <>
      <View>{children}</View>
      <TabBar />
    </>
  );
};

export default Layout;
