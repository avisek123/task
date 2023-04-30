import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Icon, Row, Text} from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = () => {
  const [name, setName] = React.useState('');
  const getAuthData = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      // console.log('value', value);
      if (value) {
        setName(value);
      } else {
        setName('');
      }
    } catch (e) {
      console.log('error', e);
    }
  };
  React.useEffect(() => {
    getAuthData();
  }, []);
  return (
    <Box shadow={2} p={3} bgColor="#fff">
      <Row justifyContent={'space-between'}>
        <Text numberOfLines={1} width={200} fontSize={20} bold>
          Hello {name}
        </Text>

        <Row>
          <Icon
            color="#000"
            alignSelf={'center'}
            size={5}
            mr={4}
            as={<Ionicon name="ios-search-outline" />}
          />

          <Icon
            color="#000"
            alignSelf={'center'}
            size={5}
            mr={4}
            as={<Ionicon name="notifications-outline" />}
          />
        </Row>
      </Row>
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({});
