import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PrivateStackParams} from 'types';
import {Private} from 'screens';
import {BottomTab} from 'layouts';

const Stack = createNativeStackNavigator<PrivateStackParams>();
const PrivateRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Private.Home}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Products"
        component={Private.Products}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Account"
        component={Private.Account}
      />
    </Stack.Navigator>
  );
};
export default PrivateRoutes;
