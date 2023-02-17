import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ButtonProps {
  enabled: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 52px;
  height: 52px;
  border-radius: 6px;
  margin-left: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({ enabled, theme }) =>
    enabled ? theme.colors.blue : theme.colors.blue_dark};
`;
