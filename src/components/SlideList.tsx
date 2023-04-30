import {Platform, StyleSheet} from 'react-native';
import React from 'react';
import {Image} from 'native-base';
import {SCREEN_HEIGHT} from 'utils';

const SlideList = ({item}: any) => {
  return (
    <>
      <Image
        source={item?.img}
        alt="Logo"
        w={'100%'}
        borderRadius={1}
        h={Platform.OS === 'ios' ? SCREEN_HEIGHT / 2.1 : SCREEN_HEIGHT / 3.5}
        resizeMode="contain"
      />
    </>
  );
};

export default SlideList;

const styles = StyleSheet.create({});
