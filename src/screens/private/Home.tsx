import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Icon, Image, Row, Text} from 'native-base';
import AntD from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Header} from 'components';
const Home = () => {
  return (
    <Box flex={1} safeArea>
      <Header />
      <Box p={4}>
        <Box p={2} mt={5} bgColor={'#fff'}>
          <Row>
            <Image
              alt=""
              resizeMode="contain"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              w={'12'}
              h={12}
              style={{borderRadius: 3}}
            />
            <Box flex={1} ml={4}>
              <Text>Political Organization</Text>
              <Text fontSize={13} color="gray.400">
                22 Min
              </Text>
            </Box>
            <Box
              p={1}
              bgColor={'red.500'}
              position={'absolute'}
              top={-8}
              right={-8}>
              <Icon
                name="menu-unfold"
                alignSelf={'center'}
                as={AntD}
                color="#fff"
              />
            </Box>
          </Row>
          <Box mt={1}>
            <Text textAlign={'justify'}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content
            </Text>
          </Box>
          <Box mt={2}>
            <Row justifyContent={'space-between'} space={1}>
              <Box
                justifyContent={'center'}
                w={6}
                h={6}
                borderRadius={100}
                bgColor={'yellow.400'}>
                <Icon
                  name="menu-unfold"
                  alignSelf={'center'}
                  color="#fff"
                  as={AntD}
                />
              </Box>
              <Text color="gray.400" alignSelf={'center'} fontSize={12}>
                Donate
              </Text>
              <Box
                justifyContent={'center'}
                w={6}
                h={6}
                borderRadius={100}
                bgColor={'red.500'}>
                <Icon
                  name="cards-heart"
                  alignSelf={'center'}
                  color="#fff"
                  as={MIcon}
                />
              </Box>
              <Text color="gray.400" alignSelf={'center'} fontSize={12}>
                122 Likes
              </Text>
              <Box
                justifyContent={'center'}
                w={6}
                h={6}
                borderRadius={100}
                bgColor={'cyan.500'}>
                <Icon
                  name="comment-processing-outline"
                  alignSelf={'center'}
                  color="#fff"
                  as={MIcon}
                />
              </Box>
              <Text color="gray.400" alignSelf={'center'} fontSize={12}>
                123 Comments
              </Text>
              <Box
                justifyContent={'center'}
                w={6}
                h={6}
                borderRadius={100}
                bgColor={'gray.400'}>
                <Icon
                  name="dots-three-horizontal"
                  alignSelf={'center'}
                  color="#fff"
                  as={Entypo}
                />
              </Box>
            </Row>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({});
