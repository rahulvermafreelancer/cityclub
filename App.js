import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Homescreen';
import StartupScreen from './src/screens/StartupScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="startup">
        <Stack.Screen
          name="startup"
          component={StartupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signup"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
