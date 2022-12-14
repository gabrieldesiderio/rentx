import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  padding-right: 24px;
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 132px;
  align-items: center;
  justify-content: center;
`;

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;
