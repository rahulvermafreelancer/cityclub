import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ComingSoonCards from './ComingSoonCards';

const ComingSoon = () => {
  return (
    <View style={styles.NowplayingContainer}>
      <View style={styles.Nowplaying}>
        <View>
          <Text style={styles.playingText}>Coming Soon</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.showText}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardStyle}>
        <ComingSoonCards />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  NowplayingContainer: {
    // marginVertical: '2%',
  },
  Nowplaying: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playingText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: '5%',
  },
  cardStyle: {
    marginTop: '5%',
  },
  showText: {
    color: '#FCC434',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ComingSoon;
