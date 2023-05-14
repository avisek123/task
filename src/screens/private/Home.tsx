import {
  ActivityIndicator,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Box, FlatList, Center} from 'native-base';

import {CampaignCard, Header} from 'components';
import {useCampaign} from 'hooks';
import {Campaign} from 'types';
const Home = () => {
  const {data, isLoading, isRefreshing, setIsRefreshing} = useCampaign();

  const renderItem: ListRenderItem<Campaign> = ({item}) => {
    // Render each item here
    return <CampaignCard item={item} />;
  };
  console.log('data', data);
  return (
    <Box flex={1} safeArea>
      <Header />
      {isLoading ? (
        <Center h={'70%'}>
          <ActivityIndicator size={'large'} />
        </Center>
      ) : (
        <FlatList
          data={data?.data}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={() => setIsRefreshing(true)}
            />
          }
          renderItem={renderItem}
        />
      )}
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({});
