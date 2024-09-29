import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {OtpInput} from 'react-native-otp-entry';

const OtpVerify = ({navigation}) => {
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.loginContainer}>
      <View style={styles.signupnavigation}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/img/arrow-left.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.confirmText}>
        <Text style={styles.textStyle}>Confirm OTP code</Text>
        <Text style={styles.paraStyle}>
          You just need to enter the OTP sent to the registered phone number
          (704) 555-0127.
        </Text>
      </View>
      <View style={styles.inputTexts}>
        <View style={styles.textfield}>
          <OtpInput
            numberOfDigits={6}
            focusColor="#fff"
            onTextChange={otp => console.log(otp)}
            theme={{
              pinCodeTextStyle: styles.pinCodeText,
              pinCodeContainerStyle: styles.pinCodeContainer,
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('home')}>
        <Text style={styles.loginButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#000000',
    padding: '2%',
  },
  signupnavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: '5%',
    marginLeft: '2%',
  },
  iconColor: {
    color: '#fff',
    fontSize: 25,
  },
  inputTexts: {
    marginVertical: '5%',
  },
  inputTextbox: {
    color: '#fff',
    fontSize: 20,
  },
  loginButton: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: '5%',
    borderRadius: 30,
    backgroundColor: '#FCC434',
    paddingVertical: 15,
  },
  loginButtonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  textfield: {
    width: '80%',
    marginLeft: '5%',
  },
  confirmText: {
    marginVertical: '5%',
  },
  textStyle: {
    color: '#FCC434',
    fontSize: 26,
    fontWeight: 'bold',
  },
  paraStyle: {
    color: '#fff',
    marginTop: '3%',
    fontSize: 16,
    lineHeight: 25,
  },
  pinCodeText: {
    color: '#fff',
  },
  pinCodeContainer: {
    backgroundColor: '#FCC434',
    opacity: 0.5,
  },
});

export default OtpVerify;
