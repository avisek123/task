import {
  ActivityIndicator,
  BackHandler,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import {Box, FlatList, Center} from 'native-base';

import {CampaignCard, Header} from 'components';
import {useCampaign} from 'hooks';
import {Campaign} from 'types';

import {Alert} from 'react-native';
const Home = () => {
  const {data, isLoading, isRefreshing, setIsRefreshing} = useCampaign();

  const renderItem: ListRenderItem<Campaign> = ({item}) => {
    // Render each item here
    return <CampaignCard item={item} />;
  };
  console.log('data', data);
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Confirm Exit', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <Box flex={1} safeArea>
      <Header />
      {isLoading ? (
        <Center h={'70%'}>
          <ActivityIndicator size={'large'} />
        </Center>
      ) : (
        <FlatList
          initialNumToRender={5}
          data={data?.data}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={() => setIsRefreshing(true)}
            />
          }
          renderItem={renderItem}
          ListFooterComponent={<Box mb={3}></Box>}
        />
      )}
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({});
