import styled from 'styled-components/native';
import {theme} from '../../themes';

const {WIDTH, fontFamilys, fontSize, colors} = theme;

export const Container = styled.View`
  margin: 24px 16px;
`;

export const TextBold = styled.Text<{
  primary?: boolean;
}>`
  font-size: ${fontSize.h4}px;
  font-family: ${fontFamilys.PoppinsBold};
  color: ${({primary}) => (primary ? `${colors.Primary}` : `${colors.Dark}`)};
`;
