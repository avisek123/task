import {StyleSheet} from 'react-native';
import {useAppContext} from 'contexts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useBasicFunctions = () => {
  const {setIsLoggedIn} = useAppContext();
  const handleLogin = () => {
    AsyncStorage.setItem('isLoggedIn', 'true')
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch(error => console.log(error));
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.setItem('isLoggedIn', 'false');
      setIsLoggedIn(false);
    } catch (error) {
      console.log('error', error);
    }
  };
  return {
    handleLogin,
    handleLogout,
  };
};
export default useBasicFunctions;

const styles = StyleSheet.create({});
