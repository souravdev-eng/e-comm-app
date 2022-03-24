import styled from 'styled-components/native';
import {theme} from '../../themes';

const {WIDTH, fontFamilys, fontSize, colors} = theme;

export const Container = styled.View`
  padding: 0px 16px;
`;

export const TextBold = styled.Text<{
  primary?: boolean;
}>`
  font-size: ${fontSize.h4}px;
  font-family: ${fontFamilys.PoppinsSemiBold};
  color: ${({primary}) => (primary ? `${colors.Primary}` : `${colors.Dark}`)};
`;

export const Text = styled.Text`
  font-size: ${fontSize.h4}px;
  font-family: ${fontFamilys.Poppins};
  color: ${colors.LightGray};
  margin-top: 8px;
`;
