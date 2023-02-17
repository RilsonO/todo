import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

export const Uncheck = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.blue};
`;
