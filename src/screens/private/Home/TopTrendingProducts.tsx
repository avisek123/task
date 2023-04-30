import React from 'react';
import {
  Box,
  FlatList,
  Heading,
  Icon,
  Image,
  Pressable,
  Row,
  Text,
} from 'native-base';
import COLORS from 'styles';
import AntD from 'react-native-vector-icons/AntDesign';

import {useNavigation} from '@react-navigation/native';
import {PrivateNavigationProps} from 'src/types/allRoutes';
import {SCREEN_WIDTH} from 'utils';
import {useProducts, useTopTrendingProducts} from 'hooks';

const TopTrendingProducts = () => {
  const {topTrending} = useTopTrendingProducts();
  const {navigate} = useNavigation<PrivateNavigationProps>();

  return (
    <Box mt={5}>
      <Row px={4} justifyContent={'space-between'}>
        <Heading fontSize={15}>{'Top Trending Products'}</Heading>
        <Icon
          color={'#000'}
          size={5}
          alignSelf={'center'}
          as={<AntD name="arrowright" />}
        />
      </Row>
      <Box mt={5}>
        <FlatList
          data={topTrending}
          initialNumToRender={3} // Reduce initial render amount
          maxToRenderPerBatch={7} // Reduce number in each render batch
          windowSize={6}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}: any) => (
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
                ₹2999
              </Text>
            </Pressable>
          )}
        />
      </Box>
    </Box>
  );
};

export default TopTrendingProducts;
