import {StyleSheet} from 'react-native';
import React from 'react';
import {Image, Pressable, Text} from 'native-base';
import {SCREEN_WIDTH} from 'utils';
import COLORS from 'styles';
import {ProductType} from 'types';

const ProductCard = ({item}: {item: ProductType}) => {
  return (
    <>
      <Pressable ml={2} mr={2} width={SCREEN_WIDTH / 3.5}>
        <Image
          height={'32'}
          width="100%"
          resizeMode={'contain'}
          alt="image base"
          source={{uri: item?.image}}
        />
        <Text
          mt={1}
          fontSize={10}
          numberOfLines={2}
          textAlign="center"
          alignSelf={'center'}>
          {item?.title}
        </Text>
        <Text
          fontWeight={'semibold'}
          textAlign={'center'}
          fontSize={11}
          color={COLORS.PRIMARY}>
          ${item?.price}
        </Text>
      </Pressable>
    </>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
