import {StyleSheet} from 'react-native';
import React from 'react';
import PublicRoutes from './routes/Public';
import PrivateRoutes from './routes/Private';

const Router = () => {
  const [isLoggedIn, setIsLoggeedIn] = React.useState(false);

  return <>{isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}</>;
};

export default Router;

const styles = StyleSheet.create({});
