import styled from 'styled-components/native';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInputProps } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  height: 56px;
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

export const InputText = styled.TextInput<TextInputProps>`
  flex: 1;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`;

export const ChangePasswordVisibilityButton = styled(BorderlessButton)<BorderlessButtonProps>`
  width: 56px;
  align-items: center;
  justify-content: center;
`;
