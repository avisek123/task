import {Linking, StyleSheet, TouchableOpacity} from 'react-native';
import {Box, Button, Icon, Image, Row, Text} from 'native-base';
import AntD from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import React, {useState} from 'react';
import {Campaign} from 'types';
import Hyperlink from 'react-native-hyperlink';

const CampaignCard = ({item}: {item: Campaign}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

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
  );
};

export default CampaignCard;

const styles = StyleSheet.create({});
