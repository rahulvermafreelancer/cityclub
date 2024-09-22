import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
export const SLIDER_WIDTH = Dimensions.get('window').width - 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const FlashCard = ({item, index}) => {
  return (
    <View key={index} style={styles.CarosuelWidth}>
      <View>
        <Image style={styles.CarosuelImage} source={item.imgUrl} />
      </View>
      <View style={styles.Content}>
        <Text style={styles.CarosuelHeading}>{item.title}</Text>
        <Text style={styles.CarouselDescription}>{item.body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CarosuelWidth: {
    width: ITEM_WIDTH,
  },
  CarosuelImage: {
    width: ITEM_WIDTH,
    height: 300,
  },
  Content: {
    marginVertical: 20,
  },
  CarosuelHeading: {
    color: '#ffffff',
    textAlign: 'center',
    padding: '2%',
    fontSize: 30,
  },
  CarouselDescription: {
    color: '#ffffff',
    textAlign: 'center',
    padding: '2%',
    fontSize: 15,
  },
});

export default FlashCard;
