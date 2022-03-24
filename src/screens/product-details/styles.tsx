import styled from 'styled-components/native';
import {Text, TextBold} from '../../components/global/global.styles';
import {theme} from '../../themes';

import Icons from 'react-native-vector-icons/Ionicons';

const {WIDTH, colors, fontFamilys, fontSize} = theme;

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const ImageContainer = styled.View`
  width: ${WIDTH}px;
  margin-bottom: 40px;
  aspect-ratio: ${16 / 9};
`;

export const Title = styled(TextBold)`
  font-size: ${fontSize.h2};
`;

export const Icon = styled(Icons)<{active?: boolean}>`
  font-size: 28px;
  color: ${({active}) => (active ? colors.Pink : colors.LightGray)};
`;

export const Price = styled(TextBold)`
  font-size: ${fontSize.h2};
  color: ${colors.Primary};
  font-family: ${fontFamilys.PoppinsBold};
  margin: 12px 0px;
`;

export const BuyButton = styled.TouchableOpacity`
  background-color: ${colors.Primary};
  width: ${WIDTH / 1.1}px;
  height: 48px;
  position: absolute;
  align-self: center;
  bottom: 10px;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled(TextBold)`
  color: ${colors.White};
  font-size: ${fontSize.h4};
  font-family: ${fontFamilys.PoppinsBold};
`;
