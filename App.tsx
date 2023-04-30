import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './src/Router';
import {NativeBaseProvider} from 'native-base';
import {CustomTheme} from 'styles';
import {AppContextProvider} from 'contexts';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={CustomTheme as any}>
        <AppContextProvider>
          <Router />
        </AppContextProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
