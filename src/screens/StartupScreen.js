import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import StartupCarousel from '../components/StartupCarousel';
import {useNavigation} from '@react-navigation/native';

const StartupScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoView}>
        <Image source={require('../assets/img/logo.png')} />
      </View>
      <View style={styles.BannerView}>
        <StartupCarousel />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('login')}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.SignupButton}
        onPress={() => navigation.navigate('signup')}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.policyText}>
        By sign in or sign up, you agree to our Terms of Service and Privacy
        Policy.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    paddingHorizontal: '2%',
    paddingVertical: '5%',
  },
  BannerView: {
    alignSelf: 'center',
    width: '90%',
    marginTop: '5%',
  },
  logoView: {
    marginVertical: 15,
    marginHorizontal: 5,
    paddingVertical: 10,
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
});

export default StartupScreen;
