import Geolocation from 'react-native-geolocation-service';
import {
  useDisclose,
  Actionsheet,
  Box,
  Button,
  Heading,
  HStack,
  Text,
  VStack,
  Row,
  View,
  FlatList,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Header} from 'components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
function getSevenDayRange(startDate: any) {
  const dates = [];
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000); // add i days
    dates.push(date);
  }

  const dayNames = dates.map(date => daysOfWeek[date.getDay()]);

  return {dates, dayNames};
}
const Task1 = () => {
  const [selected, setSelected] = useState<any>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [address, setAddress] = React.useState();
  const [selectDay, setSelectDay] = React.useState<any>();
  const [attendance, setAttendance] = useState({});
  const {onOpen, isOpen, onClose} = useDisclose();
  const startDate = new Date(); // current date
  const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000); // add 7 days

  const markedDates = {}; // optionally mark some dates as selected, etc.

  const {dates, dayNames} = getSevenDayRange(startDate);
  const [selectedDate, setSelectedDate] = useState(null);

  const renderItem = ({item}: any) => (
    <TouchableOpacity onPress={() => setSelectedDate(item)}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <Text style={{fontSize: 16}}>{item.getDate()}</Text>
        <Text style={{fontSize: 16}}>{dayNames[item.getDay()]}</Text>
      </View>
    </TouchableOpacity>
  );

  const selectedSubjects = selectedDate
    ? [
        {subject: 'Mathematics', time: '9:00am - 10:00am'},
        {subject: 'English Language', time: '10:00am - 11:00am'},
        {subject: 'Physics', time: '11:00am - 12:00pm'},
      ]
    : [];

  return (
    <Box flex={1} bgColor={'#fff'}>
      <FlatList
        data={dates}
        renderItem={renderItem}
        keyExtractor={item => item.toISOString()}
        horizontal={true}
        contentContainerStyle={{paddingVertical: 16}}
        showsHorizontalScrollIndicator={false}
      />
      {selectedDate && (
        <View style={{marginTop: 16}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 8}}>
            Classes for {selectedDate.toDateString()}
          </Text>
          <FlatList
            data={selectedSubjects}
            renderItem={({item}) => (
              <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  {item.subject}
                </Text>
                <Text style={{fontSize: 16}}>{item.time}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </Box>
  );
};

export default Task1;
