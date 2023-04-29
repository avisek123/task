import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './src/Router';
import {NativeBaseProvider} from 'native-base';
import {CustomTheme} from 'styles';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={CustomTheme as any}>
        <Router />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
