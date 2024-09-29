/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState('');

  return (
    <View style={styles.loginContainer}>
      <View style={styles.signupnavigation}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/img/arrow-left.png')} />
        </TouchableOpacity>
        <Text style={styles.signupText}>Log In</Text>
      </View>
      <View style={[styles.inputTexts, {marginTop: '20%'}]}>
        <View style={[{marginLeft: '5%'}]}>
          <FontAwesome name="envelope" style={styles.iconColor} />
        </View>
        <View style={styles.textfield}>
          <TextInput
            onChangeText={text => setUsername(text)}
            style={styles.inputTextbox}
            value={username}
            color="#fff"
            placeholder="Username"
            cursorColor="#fff"
            placeholderTextColor="#fff"
          />
        </View>
      </View>
      <View style={styles.inputTexts}>
        <View style={[{marginLeft: '5%'}]}>
          <FontAwesome name="lock" style={styles.iconColor} />
        </View>
        <View style={styles.textfield}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.inputTextbox}
            cursorColor="#fff"
            placeholderTextColor="#fff"
          />
        </View>
      </View>
      <View style={styles.inputTexts}>
        <View style={[{marginLeft: '5%'}]}>
          <FontAwesome name="phone" style={styles.iconColor} />
        </View>
        <View style={styles.textfield}>
          <TextInput
            placeholder="Phone"
            keyboardType="numeric"
            value={phone}
            onChangeText={text => setPhone(text)}
            style={styles.inputTextbox}
            cursorColor="#fff"
            placeholderTextColor="#fff"
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('otp')}>
        <Text style={styles.loginButtonText}>Continue</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
        <View style={styles.otherLoginView}>
          <Text style={styles.otherLogin}>Or continue with</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
      </View>
      <TouchableOpacity
        style={styles.SignupButton}
        onPress={() => navigation.navigate('signup')}>
        <View style={styles.socialLogin}>
          <Image
            source={require('../assets/img/google.png')}
            style={{margin: '2%'}}
          />
          <Text style={[styles.signupButtonText, {margin: '1%'}]}>Google</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.policyText}>
        By sign in or sign up, you agree to our Terms of Service and Privacy
        Policy.
      </Text>
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
  signupText: {
    color: '#fff',
    fontSize: 25,
  },
  inputTexts: {
    borderWidth: 0.5,
    flexDirection: 'row',
    marginHorizontal: '3%',
    marginVertical: '5%',
    borderBottomColor: '#fff',
    alignItems: 'center',
    width: '90%',
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
  SignupButton: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 30,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  signupButtonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  policyText: {
    textAlign: 'center',
    color: '#ffffff',
    marginTop: '5%',
    lineHeight: 25,
    marginHorizontal: '10%',
    fontWeight: '300',
  },
  textfield: {
    width: '80%',
    marginLeft: '5%',
  },
  otherLogin: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
    marginHorizontal: '2%',
  },
  otherLoginView: {
    marginVertical: '10%',
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default LoginScreen;
