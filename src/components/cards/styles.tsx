import styled from 'styled-components/native';
import {theme} from '../../themes';

const {colors, WIDTH, HEIGHT, fontFamilys, fontSize} = theme;

export const Container = styled.View`
  width: ${WIDTH / 2.7}px;
  background: #fff;
  aspect-ratio: ${5 / 8}px;
  elevation: 5px;
  border-radius: 8px;
  overflow: hidden;
  margin-left: 4px;
  margin-right: 12px;

  /* margin: 0px 12px; */
`;

export const DetailsContainer = styled.TouchableOpacity`
  padding: 8px 6px;
`;
