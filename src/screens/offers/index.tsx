import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OfferScreen = () => {
  return (
    <View style={styles.container}>
      <Text>OfferScreen</Text>
    </View>
  );
};

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});
