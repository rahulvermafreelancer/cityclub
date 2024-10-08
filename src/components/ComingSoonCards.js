import React, {useRef} from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ComingSoonCard, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from './molecule/ComingSoonCard';
import {CardCarouselData} from '../data/Data';

const ComingSoonCards = () => {
  const isCarousel = useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={CardCarouselData}
        renderItem={ComingSoonCard}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
};

export default ComingSoonCards;
