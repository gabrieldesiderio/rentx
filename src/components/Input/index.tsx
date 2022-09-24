import React from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons'
import { TextInputProps } from 'react-native';

import * as S from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
}

export function Input({iconName, ...rest}: InputProps) {
  const theme = useTheme();

  return (
    <S.Container>
      <S.IconWrapper>
        <Feather 
          name={iconName}
          size={24}
          color={theme.colors.text_detail}
        />
      </S.IconWrapper>
      <S.InputText {...rest} />
    </S.Container>
  );
}