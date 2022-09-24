import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons'
import { TextInputProps } from 'react-native';

import * as S from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
}

export function PasswordInput({iconName, ...rest}: InputProps) {
  const theme = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(prevState => !prevState);
  }

  return (
    <S.Container>
      <S.IconWrapper>
        <Feather 
          name={iconName}
          size={24}
          color={theme.colors.text_detail}
        />
      </S.IconWrapper>

      <S.InputText 
        secureTextEntry={!isPasswordVisible}
        {...rest} 
      />

      <S.ChangePasswordVisibilityButton onPress={handlePasswordVisibilityChange}>
        <Feather 
          name={isPasswordVisible ? 'eye-off' : 'eye'}
          size={24}
          color={theme.colors.text_detail}
        />
      </S.ChangePasswordVisibilityButton>
    </S.Container>
  );
}