import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View<Props>`
  flex: 1;
  height: 54px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray500};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-width: 1px;
      border-color: ${theme.colors.purple_dark};
    `}
`;

export const InputText = styled.TextInput`
  height: 54px;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.gray100};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;
