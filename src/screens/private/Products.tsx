import {ListRenderItem, StyleSheet} from 'react-native';
import React from 'react';
import {Box, Divider, FlatList, HStack, Pressable, Text} from 'native-base';

import {Header, Loader, ProductList} from 'components';
import {useProducts} from 'hooks';
import {ProductType} from 'types';

const Products = () => {
  const {products, loading} = useProducts();
  const renderItem: ListRenderItem<ProductType> = ({item}) => {
    // Render each item here
    return <ProductList item={item} />;
  };
  console.log(products);
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
          <FlatList data={products} numColumns={2} renderItem={renderItem} />
        </>
      )}
    </Box>
  );
};

export default Products;

const styles = StyleSheet.create({});
