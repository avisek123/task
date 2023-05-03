import {StyleSheet} from 'react-native';
import React from 'react';

import {Actionsheet, Box, Button, Heading, HStack, Text} from 'native-base';
import COLORS from 'styles';
interface IChoiceService {
  onClose: () => void;
  isOpen: boolean;
  onOpen?: () => void;
  handleSubmit?: () => void;
}
const ChooseAttendance = ({
  onClose,
  isOpen,
  onOpen,

  handleSubmit,
}: IChoiceService) => {
  return (
    <>
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
            onPress={onClose}
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
            onPress={handleSubmit}
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
    </>
  );
};

export default ChooseAttendance;

const styles = StyleSheet.create({});
