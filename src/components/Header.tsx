import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Icon, Pressable, Row, Text} from 'native-base';
import AntD from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const Header = () => {
  return (
    <>
      <Box bgColor={'yellow.400'} h={'15%'}>
        <Icon
          mt={7}
          mr={3}
          size={23}
          alignSelf={'flex-end'}
          color={'#000'}
          name="bell"
          as={MIcon}
        />
      </Box>
      <Row mt={-10} justifyContent={'space-around'}>
        <Pressable
          p={1}
          w={'35%'}
          bgColor={'red.500'}
          alignItems={'center'}
          justifyContent={'center'}
          borderColor={'transparent'}
          borderRadius={20}
          borderWidth={1}>
          <Row space={1}>
            <Icon
              alignSelf={'center'}
              color={'#000'}
              as={MIcon}
              name="account-circle-outline"
            />
            <Text color={'#000'}>ABCD Feed</Text>
          </Row>
        </Pressable>
        <Pressable
          w={'35%'}
          justifyContent={'center'}
          alignItems={'center'}
          borderColor={'#F9F6EE'}
          borderRadius={20}
          borderWidth={1}>
          <Row space={1}>
            <Icon alignSelf={'center'} color={'#000'} as={MIcon} name="earth" />
            <Text color={'#000'}>Popular</Text>
          </Row>
        </Pressable>
        <Pressable
          justifyContent={'center'}
          w={'10%'}
          borderColor={'#F9F6EE'}
          borderRadius={20}
          borderWidth={1}>
          <Icon name="menu-unfold" alignSelf={'center'} as={AntD} />
        </Pressable>
      </Row>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({});
