import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Container } from './styles';
import Plus_Icon from '../../assets/plus.svg';

interface Props extends RectButtonProps {
  loading?: boolean;
}

export function AddButton({ enabled = true, loading = false, onPress }: Props) {
  const theme = useTheme();
  return (
    <Container enabled={enabled} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={theme.colors.gray100} />
      ) : (
        <Plus_Icon width={16} height={16} />
      )}
    </Container>
  );
}
