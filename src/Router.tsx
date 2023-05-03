import {StyleSheet} from 'react-native';
import React from 'react';
import PublicRoutes from './routes/Public';
import PrivateRoutes from './routes/Private';
import {useAppContext} from './contexts/AppContextProvider';

const Router = () => {
  const {isLoggedIn, setIsLoggedIn} = useAppContext();

  return <>{isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}</>;
};

export default Router;

const styles = StyleSheet.create({});
