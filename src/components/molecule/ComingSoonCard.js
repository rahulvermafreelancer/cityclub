import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.3);

const ComingSoonCard = ({item, index}) => {
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
    height: 150,
  },
  Content: {
    marginVertical: '1%',
  },
  CarosuelHeading: {
    color: '#ffffff',
    textAlign: 'center',
    padding: '2%',
    fontSize: 15,
  },
  CarouselDescription: {
    color: '#ffffff',
    textAlign: 'center',
    padding: '2%',
    fontSize: 10,
  },
});

export default ComingSoonCard;
