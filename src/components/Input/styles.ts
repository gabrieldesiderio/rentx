import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  height: 56px;
  margin-bottom: 8px;

  ${({ isFocused, theme }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main}
  `}
`;

export const IconWrapper = styled.View`
  border-right-width: 2px;
  border-right-color: ${({ theme }) => theme.colors.background_primary};
  border-right-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`;
