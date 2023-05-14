import {Linking, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Box,
  HStack,
  Icon,
  Image,
  Progress,
  Row,
  Text,
  View,
} from 'native-base';
import AntD from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import React, {useState} from 'react';
import {Campaign} from 'types';
import Hyperlink from 'react-native-hyperlink';
import moment from 'moment';
import {Alert} from 'react-native';

const CampaignCard = ({item}: {item: Campaign}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const CampaignProgressBar = (collection: number, goal: number) => {
    const progress = (collection / goal) * 100;
    return (
      <>
        <Progress colorScheme={'yellow'} value={progress} />
        <Row justifyContent={'space-between'}>
          <Text fontSize={13} color="gray.400">
            {' '}
            Current: ${collection}
          </Text>
          <Text fontSize={13} color="gray.400">
            Goal: ${goal}
          </Text>
        </Row>
      </>
    );
  };
  const patronDetails = item?.patrons?.details || [];

  const avatars = patronDetails
    .filter(detail => detail.user_profile_img)
    .map(detail => (
      <TouchableOpacity
        key={detail.user_id}
        onPress={() => {
          Alert.alert(
            'User Name',
            `${detail.user_first_name} ${detail.user_last_name}`,
          );
        }}>
        <Avatar source={{uri: detail.user_profile_img}} size={'sm'} mt={1} />
      </TouchableOpacity>
    ));

  return (
    <Box px={2}>
      <Box p={2} mt={5} bgColor={'#fff'}>
        <Row>
          <Image
            alt=""
            resizeMode="contain"
            src={
              item?.profile_icon ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItsLENTQ0E_3NqVmE1erjLktbyOu4sxeqtA&usqp=CAU'
            }
            w={'12'}
            h={12}
            style={{borderRadius: 3}}
          />
          <Box flex={1} ml={4}>
            <Text>{item?.name}</Text>
            <Text fontSize={13} color="gray.400">
              22 Min
            </Text>
          </Box>
          <View
            style={{
              width: 0,
              height: 0,

              position: 'absolute',
              right: -10,
              top: -8,
              justifyContent: 'center',
              alignItems: 'center',

              backgroundColor: 'transparent',
              borderStyle: 'solid',

              borderBottomWidth: 50,
              borderLeftWidth: 50,
              borderLeftColor: 'transparent',
              borderBottomColor: `${
                item?.category?.toLowerCase() === 'organization'
                  ? 'cyan'
                  : 'purple'
              }`,

              transform: [{rotate: '270deg'}],
            }}>
            <Icon
              position={'absolute'}
              top={7}
              left={-25}
              name={
                item?.category?.toLowerCase() === 'organization'
                  ? 'home-city'
                  : 'home-analytics'
              }
              as={MIcon}
              color="#fff"
            />
          </View>
        </Row>
        <Box mt={1}>
          <Hyperlink linkStyle={{color: 'blue'}}>
            <Text
              numberOfLines={expanded ? undefined : 3}
              textAlign={'justify'}>
              {item?.description}
            </Text>
          </Hyperlink>
          {item?.description.length > 120 && (
            <TouchableOpacity onPress={toggleExpanded}>
              <Text style={{color: 'blue', marginTop: 5}}>
                {expanded ? 'Read Less' : 'Read More'}
              </Text>
            </TouchableOpacity>
          )}
        </Box>
        {item?.campaign_collection > 0 && (
          <Box w="100%" maxW="400">
            <Row justifyContent={'space-between'}>
              <Text>{item?.campaign_name}</Text>
              <Text fontSize={13} color="gray.400">
                {moment(new Date(item?.campaign_end_date * 1000)).fromNow()}
              </Text>
            </Row>
            {CampaignProgressBar(
              item?.campaign_collection,
              item?.campaign_goal,
            )}
          </Box>
        )}
        <Box>
          <Text fontSize={13} color="gray.400">
            Parton of this month
          </Text>
          <HStack>{avatars}</HStack>
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
              {item?.likes_count} Likes
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
              {item.comments_count} Comments
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
  );
};

export default CampaignCard;

const styles = StyleSheet.create({});
