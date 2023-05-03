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
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {Calendar} from 'react-native-calendars';
import COLORS from 'styles';
import {Header} from 'components';

const Home = () => {
  const [selected, setSelected] = useState<any>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [address, setAddress] = React.useState();
  const [selectDay, setSelectDay] = React.useState<any>();
  const [attendance, setAttendance] = useState({});
  const {onOpen, isOpen, onClose} = useDisclose();
  const handleDayPress = (day: any) => {
    const newAttendance = {
      ...attendance,
      [day.dateString]: {marked: true, dotColor: 'green'},
    };
    const newAttendance1 = {
      ...attendance,
      [day.dateString]: {marked: true, dotColor: 'red'},
    };
    console.log('selected', selected ? 'green' : 'red');

    selected ? setAttendance(newAttendance) : setAttendance(newAttendance1);
  };
  console.log('selected', selected);

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
      console.log('hello');
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
          // See error code charts below.
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
        <Box alignSelf={'flex-start'} p="3">
          <Heading>Delete Account</Heading>
          <Text textAlign={'justify'} mt={2}>
            If you are sure you want to delete your account, your account will
            be deleted and you will no longer be able to access your account.
          </Text>
        </Box>
        <HStack justifyContent={'space-between'} w={'100%'}>
          <Button
            onPress={() => {
              setSelected(false);
              handleDayPress(selectDay);
              onClose();
            }}
            _text={{
              color: COLORS.PRIMARY,
              bold: true,
            }}
            backgroundColor={'#fff'}
            borderColor={COLORS.PRIMARY}
            borderWidth={1}
            w={'45%'}>
            Cancel
          </Button>
          <Button
            onPress={() => {
              setSelected(true);
              handleDayPress(selectDay);
              onClose();
            }}
            backgroundColor={COLORS.PRIMARY}
            _text={{
              color: '#fff',
              bold: true,
            }}
            w={'45%'}>
            Continue
          </Button>
        </HStack>
      </Actionsheet>
    </Box>
  );
};

export default Home;
