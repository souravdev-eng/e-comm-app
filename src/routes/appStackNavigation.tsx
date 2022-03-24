import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TabNavigation} from './tabNavigation';

// @@@ Screens
import CategoryProductDetails from '../screens/category-product-details';
import ProfileDetails from '../components/profile-details';
import ProductDetails from '../screens/product-details';
import AccountScreen from '../screens/account';

//@@@ Types check
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen
        name="CategoryProductDetails"
        component={CategoryProductDetails}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Profile">
      <Stack.Screen name="Profile" component={AccountScreen} />
      <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
    </Stack.Navigator>
  );
};
