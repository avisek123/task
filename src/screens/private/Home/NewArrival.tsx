import {ListRenderItem} from 'react-native';
import React from 'react';
import {Box, FlatList, Heading, Icon, Row} from 'native-base';
import AntD from 'react-native-vector-icons/AntDesign';
import {ProductCard} from 'components';
import {useNavigation} from '@react-navigation/native';
import {PrivateNavigationProps} from 'src/types/allRoutes';
import {useProducts} from 'hooks';
import {ProductType} from 'types';

const NewArrival = () => {
  const {products, loading} = useProducts();
  const {navigate} = useNavigation<PrivateNavigationProps>();

  const renderItem: ListRenderItem<ProductType> = ({item}) => {
    // Render each item here
    return <ProductCard item={item} />;
  };
  return (
    <Box mt={5}>
      <Row px={4} justifyContent={'space-between'}>
        <Heading fontSize={15}>{'New Arrival Products'}</Heading>
        <Icon
          onPress={() => {
            navigate('Products');
          }}
          color={'#000'}
          size={5}
          alignSelf={'center'}
          as={<AntD name="arrowright" />}
        />
      </Row>
      <Box mt={5}>
        <FlatList
          data={products}
          initialNumToRender={3} // Reduce initial render amount
          maxToRenderPerBatch={7} // Reduce number in each render batch
          windowSize={6}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={renderItem}
        />
      </Box>
    </Box>
  );
};

export default NewArrival;
