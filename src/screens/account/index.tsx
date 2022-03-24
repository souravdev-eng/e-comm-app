import React from 'react';
import {StyleSheet, View} from 'react-native';

import PaymentIcon from 'react-native-vector-icons/MaterialIcons';
import Location from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {TextBold} from '../../components/global/global.styles';
import {RootStackProps} from '../../routes/types';
import {theme} from '../../themes';
import * as Styled from './styles';

const AccountScreen = ({navigation}: RootStackProps) => {
  return (
    <View style={styles.container}>
      <Styled.BackHeaderContainer>
        <Styled.HeadingText>Account</Styled.HeadingText>
      </Styled.BackHeaderContainer>

      <Styled.OptionContainer
        activeOpacity={0.7}
        onPress={() => navigation.navigate('ProfileDetails')}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather name="user" style={styles.icon} />
          <TextBold style={{marginTop: 6}}>Profile</TextBold>
        </View>
      </Styled.OptionContainer>

      <Styled.OptionContainer>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather name="shopping-bag" style={styles.icon} />
          <TextBold style={{marginTop: 6}}>Orders</TextBold>
        </View>
      </Styled.OptionContainer>

      <Styled.OptionContainer>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Location name="md-location-outline" style={styles.icon} />
          <TextBold style={{marginTop: 6}}>Address</TextBold>
        </View>
      </Styled.OptionContainer>

      <Styled.OptionContainer>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <PaymentIcon name="payment" style={styles.icon} />
          <TextBold style={{marginTop: 6}}>Payments</TextBold>
        </View>
      </Styled.OptionContainer>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icon: {marginRight: 16, fontSize: 30, color: theme.colors.Primary},
});
