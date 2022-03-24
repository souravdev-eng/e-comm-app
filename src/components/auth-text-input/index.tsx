import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {theme} from '../../themes';

const {WIDTH, HEIGHT, fontFamilys, fontSize, colors} = theme;

interface Props {
  iconName?: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  errors?: string;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  secureTextEntry?: boolean;
  multiline?: boolean;
  style?: any;
}

const AuthTextInput: React.FC<Props> = ({
  iconName,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  multiline = false,
  style,
}) => {
  return (
    <>
      <TextInputContainer active={false} style={style}>
        {iconName && (
          <Icon name={iconName} size={25} color={theme.colors.LightGray} />
        )}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
        />
      </TextInputContainer>
    </>
  );
};

export default AuthTextInput;

const TextInputContainer = styled.View<{
  active: boolean;
}>`
  width: ${WIDTH / 1.1}px;
  /* height: 50px; */
  border-width: 0.4px;
  border-radius: 8px;
  border-color: ${colors.LightGray};
  margin: 8px 10px;
  align-self: center;
  flex-direction: row;
  align-items: center;
  padding: 0px 10px;
`;

const TextInput = styled.TextInput`
  padding-left: 10px;
  width: 90%;
  font-family: ${fontFamilys.PoppinsMedium};
  font-size: ${fontSize.h5}px;
  color: ${colors.LightGray};
`;
