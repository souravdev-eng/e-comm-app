import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import * as Styled from './styles';
import {theme} from '../../themes';

interface HeaderProps {
  title: string;
}

const HeaderBack: React.FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation();

  return (
    <Styled.Container divider={true}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" style={styles.icon} />
      </TouchableOpacity>
      <Styled.HeadingText>{title}</Styled.HeadingText>
    </Styled.Container>
  );
};

export default HeaderBack;

const styles = StyleSheet.create({
  icon: {
    color: theme.colors.LightGray,
    fontSize: 31,
    marginRight: 10,
    alignSelf: 'center',
  },
});
