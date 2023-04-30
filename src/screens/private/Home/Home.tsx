import {StyleSheet} from 'react-native';
import React from 'react';
import {Avatar, Box, Pressable, Row, ScrollView, Text} from 'native-base';
import {Header, Slider} from 'components';
import {DimensionWidth, onScroll} from 'utils';
import {useNavigation} from '@react-navigation/native';

// import NewArrival from './NewArrival';
// import TopTrending from './TopTrending';

import {PrivateNavigationProps} from 'src/types/allRoutes';
import {useProducts} from 'hooks';
import NewArrival from './NewArrival';
import TopTrendingProducts from './TopTrendingProducts';

const data = [
  {
    id: 1,
    img: 'https://media.istockphoto.com/id/180807014/photo/casual-man-in-red-t-shirt.jpg?b=1&s=170667a&w=0&k=20&c=y_csZmdd_4Tkex6Ag7Y6Kfwb3RUBjZ6Ccw6MWRAKvHk=',
    title: 'T-Shirts',
    type: 'tshirt',
  },
  {
    id: 2,
    img: 'https://media.istockphoto.com/id/1256292058/photo/condom-and-medical-pills-in-a-pocket-of-blue-jeans.jpg?s=612x612&w=is&k=20&c=keaqDnnkCn3YrOJlFrt_RZDsTufjWSVmSm6OslMboqY=',
    title: 'Jeans',
    type: 'jean',
  },
  {
    id: 3,
    img: 'https://imagescdn.louisphilippe.com/img/app/product/8/803253-9508295.jpg?auto=format',
    title: 'Shirts',
    type: '',
  },
  {
    id: 4,
    img: 'https://imagescdn.allensolly.com/img/app/product/7/720552-7969102.jpg?auto=format',
    title: 'Trousers',
    type: 'tro',
  },
  {
    id: 5,
    img: 'https://assets.ajio.com/medias/sys_master/root/20211123/1qA7/619bee0af997ddf8f11282af/-473Wx593H-441125677-navy-MODEL.jpg',
    title: 'Shorts',
    type: 'short',
  },
];
const UserDashboard = () => {
  const navigation = useNavigation<PrivateNavigationProps>();
  const {products} = useProducts();

  return (
    <Box flex={1} bgColor="#fff">
      <Header />
      <ScrollView onScroll={e => onScroll(e, navigation)}>
        {/* categories */}
        <Box pr={2} pl={3} pt={3} pb={3}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <Row>
              {data?.map(item => (
                <Pressable width={DimensionWidth / 5.1} key={item?.id}>
                  <Box ml={1} w={16}>
                    <Avatar
                      source={{
                        uri: item?.img,
                      }}
                      borderColor="#000"
                      borderWidth={0.3}
                    />
                    <Text ml={2} fontSize={11}>
                      {item?.title}
                    </Text>
                  </Box>
                </Pressable>
              ))}
            </Row>
          </ScrollView>
        </Box>
        <Slider />
        <NewArrival />
        <TopTrendingProducts />
      </ScrollView>
    </Box>
  );
};

export default UserDashboard;

const styles = StyleSheet.create({});
