import styled from 'styled-components/native';
import {theme} from '../../../themes';

const {WIDTH, fontFamilys, fontSize, colors} = theme;

export const Container = styled.View`
  align-items: center;
  background-color: #fff;
  padding-top: 6%;
  justify-content: flex-start;
`;

export const ImageUpload = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 15px;
  align-self: flex-start;
  margin: 10px;
  background-color: #fff;
  elevation: 5;
  align-items: center;
  justify-content: center;
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
