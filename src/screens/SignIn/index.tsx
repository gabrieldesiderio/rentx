import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';

import * as S from './styles';

export function SignIn() {
  const theme = useTheme();

  return (
    <S.Container>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <S.Header>
        <S.Title>
          Estamos{'\n'}
          quase lá.
        </S.Title>
        <S.Subtitle>
          Faça seu login para começar{'\n'}
          uma experiência incrível.
        </S.Subtitle>
      </S.Header>

      <S.Footer>
        <Button 
          title="Login"
          onPress={() => {}}
          enabled={false}
          loading={false}
        />
        <Button 
          title="Criar conta gratuita"
          onPress={() => {}}
          light
          enabled={false}
          loading={false}
          color={theme.colors.background_secondary}
        />
      </S.Footer>
    </S.Container>
  );
}