import {
  Avatar,
  Box,
  FlatList,
  Pressable,
  Row,
  ScrollView,
  Text,
} from 'native-base';
import Octicons from 'react-native-vector-icons/Octicons';
import AntD from 'react-native-vector-icons/AntDesign';
import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {View, ListRenderItem} from 'react-native';
import {ClassCard, DatePicker} from 'components';
import {useSevenDayRange} from 'hooks';
import {ClassType} from 'types';
import moment from 'moment';
import {DATA} from 'utils';

const Home = () => {
  const startDate = new Date(); // current date

  const [toModalVisible, setToModalVisible] = React.useState(false);
  const [toSelectedDate, setToSelectedDate] = useState<Date | undefined>(
    undefined,
  );
  const {dates} = useSevenDayRange(toSelectedDate);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const endDate =
    toSelectedDate &&
    new Date(toSelectedDate?.getTime() + 6 * 24 * 60 * 60 * 1000);
  const [selectedSubjects, setSelectedSubjects] = useState<any>([]);
  const handlePress = (item: any) => {
    setSelectedDate(item);
  };
  const currentDate = moment();

  useEffect(() => {
    let isMount = true;
    if (toSelectedDate) {
      setToSelectedDate(toSelectedDate);
    } else {
      setToSelectedDate(startDate);
    }
    return () => {
      isMount = false;
    };
  }, []);
  useEffect(() => {
    let isMount = true;
    if (selectedDate) {
      setSelectedSubjects(DATA);
    }
    return () => {
      isMount = false;
    };
  }, [selectedDate, toSelectedDate]);
  useEffect(() => {
    let isMount = true;
    setSelectedDate(toSelectedDate);
    return () => {
      isMount = false;
    };
  }, [toSelectedDate]);
  const handleNextButtonPress = () => {
    const newDate = toSelectedDate && new Date(toSelectedDate);
    newDate && newDate.setDate(newDate.getDate() + 6);
    setToSelectedDate(newDate);
  };
  const handlePrevButtonPress = () => {
    const newDate = toSelectedDate && new Date(toSelectedDate);
    newDate && newDate.setDate(newDate.getDate() - 6);
    setToSelectedDate(newDate);
  };
  const renderItem: ListRenderItem<ClassType> = ({item}) => {
    // Render each item here
    return <ClassCard item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Box p={5}>
        <Row justifyContent={'space-between'}>
          <Text fontSize={19} bold>
            Timetable
          </Text>
          <Row space={4}>
            <Text alignSelf={'center'} color={'blue.400'}>
              View Holidays
            </Text>
            <Avatar size={'sm'} bg="purple.300">
              VS
            </Avatar>
          </Row>
        </Row>
        <Row mt={5}>
          <Pressable
            justifyContent={'center'}
            alignItems={'center'}
            w={8}
            onPress={handlePrevButtonPress}
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
            onPress={handleNextButtonPress}
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

      <FlatList data={selectedSubjects} renderItem={renderItem} />
      <DatePicker
        setSelectDate={setToSelectedDate}
        modalVisible={toModalVisible}
        setModalVisible={setToModalVisible}
        selectDate={selectedDate}
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
