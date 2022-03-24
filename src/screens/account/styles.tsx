import styled from 'styled-components/native';
import {TextBold} from '../../components/global/global.styles';
import {theme} from '../../themes';

const {colors, fontFamilys, fontSize, HEIGHT, WIDTH} = theme;

export const BackHeaderContainer = styled.View`
  width: ${WIDTH}px;
  padding: 15px 10px;
  border-bottom-color: ${colors.LightGray};
`;

export const OptionContainer = styled.TouchableOpacity`
  width: ${WIDTH};
  height: 76px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0px;
  background-color: #ebf0ff9e;
  padding: 0px 10px;
`;

export const HeadingText = styled(TextBold)`
  font-size: 18px;
`;
