import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons'
import { TextInputProps } from 'react-native';

import * as S from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function PasswordInput({iconName, value, ...rest}: InputProps) {
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(prevState => !prevState);
  }

  return (
    <S.Container isFocused={isFocused}>
      <S.IconWrapper>
        <Feather 
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}
        />
      </S.IconWrapper>

      <S.InputText 
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
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