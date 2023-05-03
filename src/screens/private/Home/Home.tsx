import {ChooseAttendance} from 'components';
import {useAppContext} from 'contexts';
import {
  useDisclose,
  Actionsheet,
  Box,
  Button,
  Heading,
  HStack,
  Text,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import COLORS from 'styles';

const Home = () => {
  const {user} = useAppContext();
  const [selected, setSelected] = useState<any>(null);
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

  return (
    <Box flex={1} bgColor={'#fff'}>
      <Text>{user}</Text>
      <Calendar
        markedDates={attendance}
        onDayPress={day => {
          onOpen();
          setSelectDay(day);
        }}
      />
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
