import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Container } from './styles';
import Trash_Icon from '../../assets/trash.svg';

interface Props extends RectButtonProps {
  active: boolean;
}

export function DeleteButton({ active = false, onPress }: Props) {
  const theme = useTheme();
  return (
    <Container active={active} onPress={onPress}>
      <Trash_Icon
        width={13}
        height={14}
        fill={active ? theme.colors.danger : theme.colors.gray300}
      />
    </Container>
  );
}
