import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {AuthNavigation} from './authNavigation';
import {TabNavigation} from './tabNavigation';
import {AppStackNavigation} from './appStackNavigation';

// import {AuthNavigation} from './authNavigation';
// import {TabNavigation} from './tabNavigation';

export const MainNavigation = () => {
  // const {currentUser} = useSelector((state: any) => state.user);
  const currentUser = true;

  return (
    <NavigationContainer>
      {!currentUser ? <AuthNavigation /> : <AppStackNavigation />}
    </NavigationContainer>
  );
};
