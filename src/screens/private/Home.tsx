import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Box, FlatList, Pressable, Row, ScrollView, Text} from 'native-base';
import AntD from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {useSevenDayRange} from 'hooks';
import moment from 'moment';
import {View} from 'react-native';
import {DATA} from 'utils';
import {DatePicker} from 'components';

const Home = () => {
  const startDate = new Date(); // current date
  const [toModalVisible, setToModalVisible] = React.useState(false);
  const [toSelectedDate, setToSelectedDate] = React.useState<Date>();
  const {dates} = useSevenDayRange(toSelectedDate);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const endDate =
    toSelectedDate &&
    new Date(toSelectedDate?.getTime() + 7 * 24 * 60 * 60 * 1000);
  const [selectedSubjects, setSelectedSubjects] = useState<any>([]);
  const handlePress = (item: any) => {
    setSelectedDate(item);
  };
  const currentDate = moment();

  useEffect(() => {
    if (toSelectedDate) {
      setToSelectedDate(toSelectedDate);
    } else {
      setToSelectedDate(startDate);
    }
  }, []);
  useEffect(() => {
    if (selectedDate) {
      setSelectedSubjects(DATA);
    } else {
      setSelectedDate(toSelectedDate);
    }
  }, [selectedDate, toSelectedDate]);

  console.log('selectedDate', selectedDate);
  console.log(dates[0]);
  return (
    <SafeAreaView style={styles.container}>
      <Box p={5}>
        <Row justifyContent={'space-between'}>
          <Text fontSize={19} bold>
            Timetable
          </Text>
          <Text alignSelf={'center'} color={'blue.400'}>
            View Holidays
          </Text>
        </Row>
        <Row mt={5}>
          <Pressable
            justifyContent={'center'}
            alignItems={'center'}
            w={8}
            bgColor={'#fff'}
            h={9}
            p={1}
            borderColor={'gray.300'}
            borderRightColor={'transparent'}
            borderRightWidth={0}
            borderWidth={1}>
            <AntD name="left" size={15} />
          </Pressable>
          <Pressable
            onPress={() => setToModalVisible(true)}
            bgColor={'#fff'}
            justifyContent={'center'}
            alignItems={'center'}
            w={'64'}
            h={9}
            borderColor={'gray.300'}
            borderWidth={1}>
            <Text>
              {' '}
              {moment(toSelectedDate).format('Do MMMM')} -{' '}
              {moment(endDate).format('Do MMMM')}{' '}
            </Text>
          </Pressable>
          <Pressable
            justifyContent={'center'}
            alignItems={'center'}
            w={8}
            bgColor={'#fff'}
            h={9}
            borderColor={'gray.300'}
            borderLeftColor={'transparent'}
            borderLeftWidth={0}
            borderWidth={1}>
            <AntD name="right" size={15} />
          </Pressable>
        </Row>
      </Box>
      <Box>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Row>
            {dates?.map((item, index) => (
              <View style={{marginHorizontal: 10}} key={index}>
                <Pressable
                  onPress={() => handlePress(item)}
                  justifyContent={'center'}
                  alignItems={'center'}
                  w={'10'}
                  borderRadius={90}
                  h={'16'}
                  bgColor={
                    moment(item).isSame(selectedDate, 'day')
                      ? '#4169e1'
                      : 'gray.200'
                  }>
                  <Box alignItems={'center'}>
                    <Text
                      color={
                        moment(item).isSame(selectedDate, 'day')
                          ? '#fff'
                          : '#000'
                      }
                      fontSize={12}>
                      {moment(item).format('ddd')}
                    </Text>
                    <Box
                      borderRadius={100}
                      h={5}
                      mt={1}
                      w={5}
                      alignItems={'center'}
                      p={0.8}
                      bgColor={
                        moment(item).isSame(selectedDate, 'day') ? '#fff' : null
                      }>
                      <Text
                        color={
                          moment(item).isSame(selectedDate, 'day')
                            ? '#4169e1'
                            : '#000'
                        }
                        fontSize={13}>
                        {moment(item).format('DD')}
                      </Text>
                    </Box>
                  </Box>
                </Pressable>
                {moment(item).isSame(currentDate, 'day') ? (
                  <Octicons
                    color="#4169e1"
                    style={{alignSelf: 'center'}}
                    name="dot-fill"
                  />
                ) : null}
              </View>
            ))}
          </Row>
        </ScrollView>
      </Box>

      <FlatList
        data={selectedSubjects}
        renderItem={({item}: any) => (
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
              <Text color="gray.500" fontSize={12}>
                {item?.time}
              </Text>
            </Row>
          </Box>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <DatePicker
        setSelectDate={setToSelectedDate}
        selectDate={toSelectedDate}
        modalVisible={toModalVisible}
        setModalVisible={setToModalVisible}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
