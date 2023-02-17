import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const EmptyMessageContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 48px 0;
`;

export const EmptyMessage = styled.Text`
  color: ${({ theme }) => theme.colors.gray300};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-top: 16px;
`;

export const EmptySubMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
`;
