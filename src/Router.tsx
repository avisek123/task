import {ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import PublicRoutes from './routes/Public';
import PrivateRoutes from './routes/Private';
import {useAppContext} from './contexts/AppContextProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './components/Loader';

const Router = () => {
  const {isLoggedIn, setIsLoggedIn} = useAppContext();
  // const getAuthData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('isLoggedIn');
  //     // console.log('value', value);
  //     if (value === 'true') {
  //       setIsLoggedIn(true);
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //   } catch (e) {
  //     console.log('error', e);
  //   }
  // };

  // React.useEffect(() => {
  //   getAuthData();
  // }, [isLoggedIn]);
  if (isLoggedIn === null) return <Loader />;
  return <>{isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}</>;
};

export default Router;

const styles = StyleSheet.create({});
