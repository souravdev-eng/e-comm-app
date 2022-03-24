import styled from 'styled-components/native';
import {theme} from '../../themes';
import {TextBold} from '../global/global.styles';

const {colors, fontFamilys} = theme;

export const BoldText = styled(TextBold)`
  font-size: 15.5px;
  font-family: ${fontFamilys.PoppinsBold};
`;

export const Text = styled(TextBold)`
  font-size: 13.2px;
  font-family: ${fontFamilys.Poppins};
`;

export const UserDetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 4px;
  height: 74px;
  padding-right: 10px;
`;
