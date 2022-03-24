import styled from 'styled-components/native';
import {theme} from '../../themes';
import {TextBold} from '../global/global.styles';
import Feather from 'react-native-vector-icons/Feather';

const {colors, fontFamilys, WIDTH} = theme;

export const ProfileContainer = styled.View`
  width: ${WIDTH / 1.1}px;
  flex-direction: row;
  margin: 10px 10px;
  border-bottom-width: 0.7px;
  border-bottom-color: ${colors.LightGray};
`;
export const ProfileContainerImage = styled.TouchableOpacity`
  width: 80;
  height: 80;
  border-radius: 80px;
  overflow: hidden;
  margin: 0px 16px;
  margin-bottom: 22px;
  border-width: 3px;
  border-color: ${colors.Pink};
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
`;
export const BoldText = styled(TextBold)`
  font-size: 15.5px;
  font-family: ${fontFamilys.PoppinsBold};
`;

export const Text = styled(TextBold)`
  font-size: 13.2px;
  font-family: ${fontFamilys.Poppins};
`;

export const UploadContainerImage = styled.TouchableOpacity`
  width: 80;
  height: 80;
  border-radius: 80px;
  overflow: hidden;
  margin: 0px 16px;
  margin-bottom: 22px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.LightBlue};
`;

export const CameraIcon = styled(Feather)`
  font-size: 32px;
  color: ${colors.Dark};
  opacity: 0.5;
`;
