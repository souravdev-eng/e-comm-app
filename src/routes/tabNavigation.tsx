import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppStackNavigation, ProfileStackNavigation} from './appStackNavigation';
import {theme} from '../themes';
import {BottomTabProps} from './types';
import SearchScreen from '../screens/search';
import CartScreen from '../screens/cart';
import OfferScreen from '../screens/offers';
import AccountScreen from '../screens/account';
import HomeScreen from '../screens/home';

const Tab = createBottomTabNavigator<BottomTabProps>();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.Primary,
        tabBarInactiveTintColor: theme.colors.LightGray,
        tabBarStyle: {height: 65},
        tabBarLabelStyle: {
          fontFamily: theme.fontFamilys.PoppinsMedium,
          fontSize: theme.fontSize.body,
        },
      }}>
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              size={size * 1.05}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              name={focused ? 'ios-search' : 'search-outline'}
              size={size * 1.2}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={size * 1.2}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Offer"
        component={OfferScreen}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              name={focused ? 'ios-pricetag' : 'ios-pricetag-outline'}
              size={size * 1.2}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileStackNavigation}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size * 1.2}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
