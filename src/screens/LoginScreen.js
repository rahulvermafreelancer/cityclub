import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.loginContainer}>
      <View>
        <FontAwesome name="arrow-left" style={styles.BackArrow} />
      </View>
      <View>
        <View>
          <FontAwesome name="envelope" />
        </View>
        <View>
          <TextInput />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  BackArrow: {
    color: '#ffffff',
    fontSize: 30,
  },
});

export default LoginScreen;
