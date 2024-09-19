import React from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';

const TabBar = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Hello from TabBar</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TabBar;
