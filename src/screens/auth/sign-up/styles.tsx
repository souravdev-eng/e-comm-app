import styled from 'styled-components/native';
import {theme} from '../../../themes';

const {WIDTH, HEIGHT, fontFamilys, fontSize, colors} = theme;

export const Container = styled.View`
  align-items: center;
  flex: 1;
  background-color: #fff;
  padding-top: 16%;
  /* justify-content: center; */
`;

export const LogoContainer = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${fontFamilys.PoppinsBold};
  font-size: ${fontSize.h1}px;
  color: ${colors.Dark};
  margin: 4px 0px;
`;

export const Text = styled.Text`
  font-family: ${fontFamilys.Poppins};
  font-size: ${fontSize.h5}px;
  color: ${colors.LightGray};
`;

export const Button = styled.TouchableOpacity`
  width: ${WIDTH / 1.1}px;
  height: 57px;
  border-radius: 8px;
  elevation: 5;
  background: #fff;
  background-color: ${colors.Primary};
  margin-top: 16px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${fontFamilys.PoppinsSemiBold};
  font-size: ${fontSize.h3}px;
  color: ${colors.White};
`;

export const TextBold = styled.Text`
  font-family: ${fontFamilys.PoppinsSemiBold};
  font-size: ${fontSize.h5}px;
  color: ${colors.Primary};
`;
