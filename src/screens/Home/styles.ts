import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Task {
  id: string;
  name: string;
  done: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray600};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(173)}px;
  background-color: ${({ theme }) => theme.colors.gray700};
  align-items: center;
`;

export const Logo = styled.Image`
  width: 110px;
  height: 32px;
  margin-top: ${getStatusBarHeight() + 50}px;
`;

export const Body = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const TasksInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray400};
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const NumberContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.gray400};
  border-radius: 999px;
  padding: 2px 8px;
  margin-left: 8px;
`;

export const InfoNumber = styled.Text`
  color: ${({ theme }) => theme.colors.gray200};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
