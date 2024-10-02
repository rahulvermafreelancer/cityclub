import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../screens/Homescreen';
import MovieScreen from '../../screens/MovieScreen';
import TicketsScreen from '../../screens/TicketsScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = require('../../assets/img/home.png');
          } else if (route.name === 'Movie') {
            iconName = require('../../assets/img/video.png');
          } else if (route.name === 'Ticket') {
            iconName = require('../../assets/img/ticket.png');
          } else if (route.name === 'Profile') {
            iconName = require('../../assets/img/user.png');
          }
          return (
            <Image
              source={iconName}
              style={{height: size, width: size, tintColor: color}}
            />
          );
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
        },
        tabBarIconStyle: {
          height: 28,
          width: 28,
        },
        tabBarItemStyle: {
          paddingVertical: 10,
        },
        tabBarActiveTintColor: '#FCC434',
        tabBarInactiveTintColor: '#cccccc',
        tabBarStyle: {backgroundColor: '#000', height: 70}, // if you want more compact tbabar then remove height along with tabbaritemstyle
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Ticket" component={TicketsScreen} />
      <Tab.Screen name="Movie" component={MovieScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabBar;
