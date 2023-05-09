import {Modal, TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {Box, Divider, HStack, Icon, Text} from 'native-base';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

interface IDatePicker {
  modalVisible: boolean;
  setModalVisible: any;
  selectDate: any;
  setSelectDate?: any;
}
const DatePicker = ({
  modalVisible,
  setModalVisible,
  selectDate,
  setSelectDate,
}: IDatePicker) => {
  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      onRequestClose={handleClose}
      visible={modalVisible}>
      <>
        <Box flex={1} safeArea>
          <Box mt={3} backgroundColor={'red'}>
            <HStack mb={3} space={'20'}>
              <TouchableOpacity onPress={handleClose} style={{marginLeft: 10}}>
                <Icon
                  as={MaterialIcons}
                  size={31}
                  color={'black'}
                  onPress={handleClose}
                  name={'keyboard-backspace'}
                />
              </TouchableOpacity>
              <Text bold fontSize={17} alignSelf={'center'}>
                {'Select Date'}
              </Text>
            </HStack>
            <Divider />
          </Box>
          <Calendar
            minDate={moment().format('YYYY-MM-DD')}
            onDayPress={day => {
              setSelectDate(new Date(day.dateString));
              //   setSelectDate(day.dateString);
            }}
            markedDates={{
              [selectDate]: {
                selected: true,
                disableTouchEvent: true,
              },
            }}
          />

          <TouchableOpacity
            onPress={handleClose}
            style={{
              backgroundColor: '#4169e1',
              position: 'absolute',
              bottom: 90,
              right: 20,
              padding: 10,
              borderRadius: 50,
            }}>
            <Icon
              as={MaterialIcons}
              size={31}
              color={'#fff'}
              onPress={handleClose}
              name={'check'}
            />
          </TouchableOpacity>
        </Box>
      </>
    </Modal>
  );
};

export default DatePicker;
