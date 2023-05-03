import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {Box, Button, Input, Text, VStack} from 'native-base';
import COLORS from 'styles';
import {useNavigation} from '@react-navigation/native';
import {PublicNavigationProps} from 'src/types/allRoutes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useFirebase} from 'hooks';

const Register = () => {
  const {navigate} = useNavigation<PublicNavigationProps>();

  const {signup} = useFirebase();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [IsSecureEntry, setIsSecureEntry] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const handleRegister = async () => {
    try {
      setLoader(true);
      const res = await signup(email, password);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  return (
    <SafeAreaView style={styles.screenWrapping}>
      <ScrollView
        style={styles.AuthContainer}
        showsVerticalScrollIndicator={false}>
        <Box px={2} mt={20}>
          <Text bold fontSize={25}>
            Register
          </Text>
          <Text fontWeight={'medium'}>Create your account to continue.</Text>

          <VStack mt={8}>
            <Text mt={4} fontSize={16} fontWeight="medium">
              Email*
            </Text>
            <Input
              value={email}
              onChangeText={txt => setEmail(txt)}
              placeholder="Enter your email"
              borderRadius={10}
              focusOutlineColor="#000"
              placeholderTextColor={'grey'}
              fontSize={14}
              backgroundColor={'#fff'}
              borderWidth={1}
              autoCapitalize={'none'}
              mt={2}
            />

            <Text mt={4} fontSize={16} fontWeight="medium">
              Password*
            </Text>
            <Input
              value={password}
              secureTextEntry={IsSecureEntry}
              onChangeText={txt => setPassword(txt)}
              placeholder="Enter your Password"
              placeholderTextColor={'grey'}
              fontSize={14}
              focusOutlineColor="#000"
              borderRadius={10}
              backgroundColor={'#fff'}
              borderWidth={1}
              mt={2}
              InputRightElement={
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry(prev => !prev);
                  }}>
                  <Ionicons
                    name={'eye-outline'}
                    size={26}
                    style={{marginRight: 5}}
                  />
                </TouchableOpacity>
              }
            />
          </VStack>

          <Button
            isDisabled={!email || !password}
            onPress={handleRegister}
            isLoading={loader}
            mt={'8'}
            alignSelf={'center'}
            fontWeight="semibold"
            w={'100%'}
            backgroundColor={COLORS.PRIMARY}>
            <Text bold color={'white'}>
              Register
            </Text>
          </Button>
          <TouchableOpacity onPress={() => navigate('Login')}>
            <Text mt={5} textAlign={'center'}>
              Already have an account ?
              <Text color={COLORS.PRIMARY}>
                {''}
                {''} Login
              </Text>
            </Text>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  screenWrapping: {
    flex: 1,
    backgroundColor: '#fff',
  },

  AuthContainer: {
    padding: 15,
  },
});
