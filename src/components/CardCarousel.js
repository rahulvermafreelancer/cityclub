import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import FlashCardHome, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from './molecule/FlashCardHome';
import {CardCarouselData} from '../data/Data';

const CardCarousel = () => {
  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <View>
      <Carousel
        layout="sample"
        layoutCardOffset={9}
        ref={isCarousel}
        data={CardCarouselData}
        renderItem={FlashCardHome}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={CardCarouselData.length}
        activeDotIndex={CardCarouselData.length / 2}
        carouselRef={isCarousel}
        dotStyle={styles.paginationStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paginationStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: '#FCC434',
  },
});

export default CardCarousel;
