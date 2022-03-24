import styled from 'styled-components/native';
import {theme} from '../../themes';

import Icons from 'react-native-vector-icons/Ionicons';

const {colors, WIDTH, fontFamilys} = theme;

export const HeaderContainer = styled.View`
  width: ${WIDTH}px;
  margin-top: 16px;
  padding: 0px 8px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
`;

export const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${WIDTH / 1.4}px;
  border-color: ${colors.LightGray};
  background: #fff;
  border-width: 0.5px;
  border-color: ${colors.LightGray};
  /* elevation: 2px; */
  height: 45;
  padding: 0px 6px;
  border-radius: 6px;
  margin-left: 10px;
`;

export const SearchBar = styled.TextInput`
  padding: 0px 4px;
  width: 90%;
  font-family: ${fontFamilys.PoppinsMedium};
`;

export const Icon = styled(Icons)`
  margin-left: 10px;
  font-size: 32px;
`;
