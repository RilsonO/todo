import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TitleProps {
  done: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.colors.gray500};
  border-radius: 8px;
`;

export const Title = styled.Text<TitleProps>`
  flex: 1;
  margin: 0 8px;
  color: ${({ theme }) => theme.colors.gray100};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  ${({ done, theme }) =>
    done &&
    css`
      color: ${theme.colors.gray300};
      text-decoration: line-through;
      text-decoration-line: line-through;
      text-decoration-color: ${theme.colors.gray300};
    `}
`;
