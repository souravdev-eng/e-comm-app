import {View, Text} from 'react-native';
import React from 'react';
import {theme} from '../../themes';

const ErrorMessage = ({error}: {error: string}) => {
  return (
    <View
      style={{
        position: 'relative',
        width: '90%',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: theme.fontSize.h5,
          fontFamily: theme.fontFamilys.PoppinsSemiBold,
          color: theme.colors.Pink,
        }}>
        {error}
      </Text>
    </View>
  );
};

export default ErrorMessage;
