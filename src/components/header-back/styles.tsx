import styled from 'styled-components/native';
import {theme} from '../../themes';
import {TextBold} from '../global/global.styles';

const {colors, WIDTH} = theme;

export const Container = styled.View<{
  divider?: boolean;
}>`
  align-items: center;
  border-bottom-color: ${colors.LightGray};
  border-bottom-width: ${({divider}) => (divider ? '0.5' : '0')}px;
  background-color: ${colors.White};
  flex-direction: row;
  padding: 15px 2px;
  height: 70;
  width: ${WIDTH}px;
`;
export const HeadingText = styled(TextBold)`
  align-items: center;
  font-size: 18px;
  color: ${colors.Dark};
`;
