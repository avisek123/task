import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './src/Router';
import {NativeBaseProvider} from 'native-base';

import {AppContextProvider} from 'contexts';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AppContextProvider>
          <Router />
        </AppContextProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
