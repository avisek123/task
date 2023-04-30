import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Box,
  Divider,
  FlatList,
  HStack,
  Image,
  Pressable,
  Row,
  Text,
  VStack,
} from 'native-base';
import {DimensionWidth} from 'utils';
import COLORS from 'styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import {Rating} from 'react-native-ratings';

import {Header, Loader} from 'components';
import {useProducts} from 'hooks';

const Products = () => {
  const {products, loading} = useProducts();
  return (
    <Box flex={1} bgColor="#fff">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <HStack
            borderBottomColor={'gray.300'}
            borderBottomWidth={1}
            justifyContent={'space-around'}
            alignItems={'center'}
            px={4}>
            <Pressable>
              <Text ml={10}>Sort</Text>
            </Pressable>
            <Divider minH={10} orientation="vertical" />
            <Pressable>
              <Text mr={10}>Filter</Text>
            </Pressable>
          </HStack>
          <FlatList
            data={products}
            numColumns={2}
            renderItem={({item}: any) => (
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
                    {/* <HStack space={1}>
                  <Rating
                    type="custom"
                    ratingCount={5}
                    startingValue={4.5}
                    readonly
                    ratingColor={COLORS.PRIMARY}
                    tintColor={'#fff'}
                    ratingBackgroundColor={'lightgrey'}
                    imageSize={15}
                    fractions="{1}"
                    style={{alignSelf: 'center'}}
                  />

                  <Text fontFamily={FONTS[500].normal} fontSize={13}>
                    {'4.5'}
                  </Text>
                </HStack> */}

                    <Row>
                      <Text
                        strikeThrough
                        color={'gray.400'}
                        fontWeight={'medium'}>
                        ₹2999
                      </Text>
                      <Text bold> ₹1500</Text>
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
            )}
            // estimatedItemSize={20}
          />
        </>
      )}
    </Box>
  );
};

export default Products;

const styles = StyleSheet.create({});
