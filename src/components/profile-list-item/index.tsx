import {
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Text,
} from 'react-native';
import React, {FC} from 'react';
import IconRight from 'react-native-vector-icons/Feather';
import * as Styled from './styles';
import {theme} from '../../themes';

interface ProfileListItemProps {
  imageUri: ImageSourcePropType;
  title: string;
  value: string;
  onPress: () => void;
  isPassword?: boolean;
}

const ProfileListItem: FC<ProfileListItemProps> = ({
  title,
  imageUri,
  onPress,
  value,
  isPassword = false,
}) => {
  return (
    <Styled.UserDetailsContainer>
      <View
        style={{
          position: 'absolute',
          right: '10%',
          justifyContent: 'flex-end',
          width: '70%',
          alignItems: 'flex-end',
        }}>
        <Text numberOfLines={1}>{isPassword ? '*******' : value}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={imageUri}
          style={{width: 24, height: 24, margin: 16}}
          resizeMode="contain"
        />
        <Styled.BoldText>{title}</Styled.BoldText>
      </View>

      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <IconRight
          name="chevron-right"
          style={{fontSize: 26, color: theme.colors.LightGray}}
        />
      </TouchableOpacity>
    </Styled.UserDetailsContainer>
  );
};

export default ProfileListItem;
