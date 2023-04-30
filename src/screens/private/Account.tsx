import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Avatar,
  Box,
  Icon,
  Pressable,
  Row,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import {Header} from 'components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from 'styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {onScroll} from 'utils';
import {useNavigation} from '@react-navigation/native';
import {PrivateNavigationProps} from 'src/types/allRoutes';
import {useBasicFunction} from 'hooks';

const Account = () => {
  const navigation = useNavigation<PrivateNavigationProps>();
  const {handleLogout} = useBasicFunction();

  const data = [
    {
      id: 1,
      title: 'My Profile',
      icon: 'person-outline',
      name: Ionicons,
    },
    {
      id: 2,
      title: 'Notification',
      icon: 'notifications-outline',
      name: Ionicons,
    },
    {
      id: 13,
      title: 'My Favorites',
      icon: 'ios-heart-outline',
      name: Ionicons,
    },
    {
      id: 3,
      title: 'My Address',
      icon: 'hourglass-outline',
      name: Ionicons,
    },
    {
      id: 4,
      title: 'My Orders',
      icon: 'shopping-bag',
      name: Feather,
    },

    {
      id: 6,
      title: 'Support',
      icon: 'earphones-alt',
      name: SimpleLineIcons,
    },
    {
      id: 7,
      title: 'Change Password',
      icon: 'lock',
      name: Feather,
    },
    {
      id: 8,
      title: 'Privacy & Policies',
      icon: 'information-circle-outline',
      name: Ionicons,
    },
    {
      id: 28,
      title: 'Terms & Conditions',
      icon: 'ios-clipboard-outline',
      name: Ionicons,
    },

    {
      id: 9,
      title: 'About Us',
      icon: 'ios-alert-circle-outline',
      name: Ionicons,
    },
  ];

  return (
    <Box flex={1} safeArea bgColor="#fff">
      <Header />
      <ScrollView onScroll={e => onScroll(e, navigation)}>
        <Pressable p={2}>
          <Row space={4} mt={3}>
            <Avatar
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&usqp=CAU',
              }}
              borderColor="#000"
              borderWidth={0.3}
            />
            <VStack flex={1} alignSelf={'center'}>
              <Text fontSize={13} color={'gray.400'}>
                Welcome
              </Text>
              <Text>{'User'}</Text>
            </VStack>
            <Icon
              alignSelf={'center'}
              as={AntDesign}
              mr={3}
              name="login"
              size="md"
            />
          </Row>
        </Pressable>
        <Box
          alignSelf={'center'}
          w={'100%'}
          mt={3}
          backgroundColor="gray.400"
          h={0.6}></Box>

        <>
          <Box mt={5} p={4}>
            {data?.map((item, index) => (
              <Pressable mt={index === 0 ? -3 : 6} key={item?.id}>
                <Row>
                  <Icon
                    alignSelf={'center'}
                    as={item?.name}
                    mr={3}
                    name={item?.icon}
                    size="md"
                  />
                  <Text flex={1} fontSize={13}>
                    {' '}
                    {item.title}
                  </Text>
                  <Icon
                    alignSelf={'center'}
                    as={Ionicons}
                    mr={3}
                    name="chevron-forward"
                    size="lg"
                  />
                </Row>
              </Pressable>
            ))}
          </Box>
        </>

        <TouchableOpacity
          onPress={() => {
            handleLogout();
          }}>
          <Row alignSelf={'center'} mt={1} mb={7} ml={5}>
            <Icon
              alignSelf={'center'}
              as={MIcon}
              mr={3}
              color={COLORS.PRIMARY}
              name="logout"
              size="lg"
            />
            <Text bold textAlign={'center'} color={COLORS.PRIMARY}>
              Logout
            </Text>
          </Row>
        </TouchableOpacity>
      </ScrollView>
    </Box>
  );
};

export default Account;

const styles = StyleSheet.create({});
