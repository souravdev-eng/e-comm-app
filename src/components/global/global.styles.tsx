import styled from 'styled-components/native';
import {theme} from '../../themes';

const {colors, WIDTH, HEIGHT, fontFamilys, fontSize} = theme;

export const Title = styled.Text`
  font-family: ${fontFamilys.PoppinsBold};
  font-size: ${fontSize.h4}px;
  color: ${colors.Dark};
  margin: 2px 0px;
`;

export const Text = styled.Text`
  font-family: ${fontFamilys.Poppins};
  font-size: ${fontSize.h5}px;
  color: ${colors.LightGray};
`;

export const TextBold = styled.Text`
  font-family: ${fontFamilys.PoppinsSemiBold};
  font-size: ${fontSize.h5}px;
  color: ${colors.Dark};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
