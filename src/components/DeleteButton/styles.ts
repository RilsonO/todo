import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
  active: boolean;
}

export const Container = styled(RectButton)<Props>`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.gray400 : 'transparent'};
  border-radius: 4px;
`;
