import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';
import {IMAGES} from 'assets';
import {Carousel} from 'react-native-snap-carousel';
import SlideList from './SlideList';
const data = [
  {
    id: 1,
    img: IMAGES.IMG1,
  },
  {
    id: 2,
    img: IMAGES.IMG2,
  },
  {
    id: 3,
    img: IMAGES.IMG3,
  },
];
const Slider = () => {
  const {width} = useWindowDimensions();
  const renderItem = ({item}: any) => {
    return <SlideList item={item} />;
  };
  return (
    <>
      <Carousel
        data={data}
        renderItem={renderItem}
        style={{
          borderRadius: 10,
        }}
        sliderWidth={width / 1}
        itemWidth={width / 1}
        inactiveSlideShift={0}
        autoplay={true}
        vertical={false}
        autoplayInterval={6000}
      />
    </>
  );
};

export default Slider;

const styles = StyleSheet.create({});
