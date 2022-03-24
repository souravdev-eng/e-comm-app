import {View, Text} from 'react-native';
import React from 'react';
import {theme} from '../../themes';

const Divider = () => {
  return (
    <View
      style={{
        marginVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
      }}>
      <View
        style={{
          borderBottomWidth: 1,
          width: '40%',
          marginHorizontal: 10,
          borderBottomColor: theme.colors.LightGray,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: theme.colors.LightGray,
        }}>
        OR
      </Text>
      <View
        style={{
          borderBottomWidth: 1,
          width: '40%',
          marginHorizontal: 10,
          borderBottomColor: theme.colors.LightGray,
        }}
      />
    </View>
  );
};

export default Divider;
