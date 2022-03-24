import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../themes';

const BannerList = () => {
  return (
    <View
      style={{
        width: theme.WIDTH / 1.05,
        aspectRatio: 16 / 9,
        alignSelf: 'center',
        borderRadius: 6,
        overflow: 'hidden',
        marginTop: 21,
        marginBottom: 43,
      }}>
      <Image
        source={require('../../assets/img/promotion-image.png')}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default BannerList;

const styles = StyleSheet.create({});
