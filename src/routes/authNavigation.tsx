import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import LoginScreen from '../screens/auth/log-in';
import RegisterScreen from '../screens/auth/sign-up';

import {AuthStackParamList} from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
