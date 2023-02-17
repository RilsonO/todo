import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import Check_Icon from '../../assets/check.svg';
import { Container, Uncheck } from './styles';

interface Props extends RectButtonProps {
  check: boolean;
}

export function Checkbox({ check, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      {check ? <Check_Icon width={18} height={18} /> : <Uncheck />}
    </Container>
  );
}
