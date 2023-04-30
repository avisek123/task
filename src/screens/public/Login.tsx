import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Box, Button, Input, Text, VStack} from 'native-base';
import COLORS from 'styles';
import {useNavigation} from '@react-navigation/native';
import {PublicNavigationProps} from 'src/types/allRoutes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useBasicFunction} from 'hooks';
const Login = () => {
  const {handleLogin} = useBasicFunction();
  const {navigate, goBack} = useNavigation<PublicNavigationProps>();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [IsSecureEntry, setIsSecureEntry] = React.useState(false);
  return (
    <SafeAreaView style={styles.screenWrapping}>
      <ScrollView
        style={styles.AuthContainer}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={goBack}
          style={{
            position: 'absolute',
            top: '2%',
            left: '1%',
          }}>
          <Ionicons size={30} color={'#000'} name="arrow-back-outline" />
        </TouchableOpacity>
        <Box px={2} mt={'32'}>
          <Text bold fontSize={25}>
            Login
          </Text>
          <Text fontWeight={'medium'}>Welcome Back!.</Text>

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
            onPress={handleLogin}
            mt={'8'}
            alignSelf={'center'}
            fontWeight="semibold"
            w={'100%'}
            backgroundColor={COLORS.PRIMARY}>
            <Text bold color={'white'}>
              Login
            </Text>
          </Button>
          <TouchableOpacity onPress={() => navigate('Register')}>
            <Text mt={5} textAlign={'center'}>
              Don't have an account?
              <Text color={COLORS.PRIMARY}>
                {''}
                {''} Register
              </Text>
            </Text>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

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
