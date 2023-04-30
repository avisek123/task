import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, HStack, Image, Pressable, Row, Text, VStack} from 'native-base';
import {DimensionWidth} from 'utils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ProductType} from 'types';
import COLORS from 'styles';
import {Rating} from 'react-native-ratings';
const ProductList = ({item}: {item: ProductType}) => {
  return (
    <>
      <Pressable
        m={2.5}
        w={DimensionWidth / 2.25}
        bgColor={'#fff'}
        borderRadius={10}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <Box py={4}>
          <Box alignItems={'center'}>
            <Image
              source={{uri: item?.image}}
              alt={'image'}
              h={20}
              w={20}
              bg={'pink.50'}
              borderRadius={5}
              resizeMode={'contain'}
            />
          </Box>
          <VStack px={2} alignItems={'center'} space={2} mt={3}>
            <Box>
              <Text
                fontSize={12}
                fontWeight={'medium'}
                w={150}
                alignSelf={'center'}
                textAlign={'center'}
                noOfLines={1}>
                {item?.title}
              </Text>
            </Box>
            <HStack space={1}>
              <Rating
                type="custom"
                ratingCount={5}
                startingValue={item?.rating?.rate}
                readonly
                ratingColor={'orange'}
                tintColor={'#fff'}
                ratingBackgroundColor={'lightgrey'}
                imageSize={15}
                fractions="{1}"
                style={{alignSelf: 'center'}}
              />

              <Text fontSize={13}>{`${item?.rating?.rate}`}</Text>
            </HStack>

            <Row>
              <Text bold>${item?.price}</Text>
            </Row>
          </VStack>
        </Box>

        <Box position={'absolute'} right={1} top={1}>
          <Pressable bg={'white'} shadow={2} borderRadius={30}>
            <MaterialIcons
              name="favorite-outline"
              size={18}
              style={{padding: 5}}
              color={COLORS.PRIMARY}
            />
          </Pressable>
        </Box>
      </Pressable>
    </>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
