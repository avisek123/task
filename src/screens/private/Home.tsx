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
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Header} from 'components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

const Home = () => {
  const [selected, setSelected] = useState<any>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [address, setAddress] = React.useState();
  const [selectDay, setSelectDay] = React.useState<any>();
  const [attendance, setAttendance] = useState({});
  const {onOpen, isOpen, onClose} = useDisclose();

  useEffect(() => {
    let isMount = true;
    const handleDayPress = (day: any) => {
      console.log(selected ? 'green' : 'red');
      if (selected === null) return;
      if (selected)
        return setAttendance(pre => ({
          ...pre,
          [day?.dateString]: {marked: true, dotColor: 'green'},
        }));
      return setAttendance(pre => ({
        ...pre,
        [day?.dateString]: {marked: true, dotColor: 'red'},
      }));
    };

    handleDayPress(selectDay);
    isMount && setSelected(null);
    return () => {
      isMount = false;
    };
  }, [selected, selectDay]);

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setHasPermission(true);
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      setHasPermission(true);
      Geolocation.requestAuthorization('always');
    }
  }, []);

  useEffect(() => {
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          console.log(latitude);
          console.log(longitude);
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

          fetch(url)
            .then(response => response.json())
            .then(json => {
              const addressComponent = json.display_name;
              console.log('addressComponent', addressComponent);
              setAddress(addressComponent);
            });
        },

        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000},
      );
    }
  }, [hasPermission]);

  return (
    <Box flex={1} bgColor={'#fff'}>
      <Header />
      <Calendar
        markedDates={attendance}
        minDate={moment().format('YYYY-MM-DD')}
        onDayPress={day => {
          onOpen();
          setSelectDay(day);
        }}
      />
      <Box ml={5} mr={5} p={4} borderWidth={1} my={5} borderStyle={'dashed'}>
        <VStack justifyContent={'space-between'}>
          <Text textAlign={'center'} fontWeight={'medium'}>
            My Location
          </Text>
          <Text mt={3} fontSize={12} textAlign={'justify'}>
            {address}.
          </Text>
        </VStack>
      </Box>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content style={{backgroundColor: '#fff', padding: 10}}>
          <Box alignSelf={'flex-start'} p="3">
            <Row justifyContent={'space-between'}>
              <Heading>Mark Your Attendance</Heading>
              <TouchableOpacity onPress={onClose}>
                <AntDesign color={'red'} name="close" size={23} />
              </TouchableOpacity>
            </Row>

            <Text mt={2}>
              Please click either the "Absent" or "Present" button to indicate
              your attendance status .
            </Text>
          </Box>
          <HStack justifyContent={'space-between'} w={'100%'}>
            <Button
              onPress={() => {
                setSelected(true);

                onClose();
              }}
              _text={{
                bold: true,
              }}
              variant={'outline'}
              w={'45%'}>
              Present
            </Button>
            <Button
              onPress={() => {
                setSelected(false);

                onClose();
              }}
              _text={{
                color: '#fff',
                bold: true,
              }}
              w={'45%'}>
              Absent
            </Button>
          </HStack>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};

export default Home;
