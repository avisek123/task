import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Icon, Row, Text} from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <Box shadow={2} p={3} bgColor="#fff">
      <Row justifyContent={'space-between'}>
        <Text>Hello Demo User </Text>
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
