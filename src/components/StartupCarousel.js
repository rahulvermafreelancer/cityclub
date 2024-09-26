import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import FlashCard, {SLIDER_WIDTH, ITEM_WIDTH} from './molecule/FlashCard';
import {bannerData} from '../data/Data';

const StartupCarousel = () => {
  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <View>
      <Carousel
        layout="sample"
        layoutCardOffset={9}
        ref={isCarousel}
        data={bannerData}
        renderItem={FlashCard}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={bannerData.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#FCC434',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default StartupCarousel;
