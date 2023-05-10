import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Box, Divider, HStack, Icon, Text} from 'native-base';
import {Modal, TouchableOpacity} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import React from 'react';
import COLORS from 'styles';

interface IDatePicker {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;

  selectDate: any;

  setSelectDate?: React.Dispatch<React.SetStateAction<Date | undefined>>;
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
  const onChange = (date: any, type: any) => {
    setSelectDate && setSelectDate(new Date(date));
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

          <CalendarPicker
            startFromMonday={true}
            allowRangeSelection={false}
            minDate={new Date()}
            // max date should be 7 days from now

            weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
            months={[
              'January',
              'Febraury',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ]}
            previousTitle="Previous"
            nextTitle="Next"
            todayBackgroundColor={COLORS.SECONDARY}
            selectedDayColor={COLORS.PRIMARY}
            selectedDayTextColor="#fff"
            scaleFactor={375}
            onDateChange={onChange}
            selectedStartDate={selectDate}
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
