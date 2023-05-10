import AntD from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Row, Text} from 'native-base';
import {ClassType} from 'types';

const ClassCard = ({item}: {item: ClassType}) => {
  return (
    <Box
      borderRadius={5}
      borderColor={`${item?.color}.900`}
      borderWidth={0.4}
      p={3}
      mt={3}
      ml={4}
      mr={4}
      bgColor={`${item?.color}.100`}>
      <Row justifyContent={'space-between'}>
        <Text fontSize={13}>{item?.subject}</Text>
        <Row space={2}>
          <AntD name="clockcircleo" size={16} />
          <Text color="gray.500" fontSize={12}>
            {item?.time}
          </Text>
        </Row>
      </Row>
    </Box>
  );
};

export default ClassCard;

const styles = StyleSheet.create({});
