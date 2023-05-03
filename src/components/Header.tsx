import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Button, Row, Text} from 'native-base';
import {useAppContext} from 'contexts';
import {useBasicFunction, useFirebase} from 'hooks';

const Header = () => {
  const {user} = useAppContext();
  const {logout} = useFirebase();
  return (
    <Box
      borderBottomColor={'gray.500'}
      borderBottomWidth={0.5}
      shadow={2}
      p={3}
      bgColor="#fff">
      <Row justifyContent={'space-between'}>
        <Box>
          <Text numberOfLines={1} width={200} fontSize={17} bold>
            Hello ,
          </Text>
          <Text numberOfLines={1} width={230} fontSize={17} bold>
            {user}
          </Text>
        </Box>

        <Row>
          <Button onPress={logout} h={10}>
            Logout
          </Button>
        </Row>
      </Row>
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({});
