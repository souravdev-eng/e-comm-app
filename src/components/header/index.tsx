import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as Styled from './styles';
import {theme} from '../../themes';

const Header = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.SearchBarContainer>
        <Icon name="md-search-outline" size={20} color={theme.colors.Primary} />
        <Styled.SearchBar placeholder="Search product" />
      </Styled.SearchBarContainer>
      <Pressable>
        <Styled.Icon
          name="md-heart-outline"
          size={32}
          color={theme.colors.LightGray}
        />
      </Pressable>
      <Pressable>
        <Icon
          name="notifications-outline"
          size={32}
          style={{marginHorizontal: 10}}
          color={theme.colors.LightGray}
        />
      </Pressable>
    </Styled.HeaderContainer>
  );
};

export default Header;
