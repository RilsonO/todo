import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, InputText } from './styles';

export function Input(Props: TextInputProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Container isFocused={isFocused}>
      <InputText
        {...Props}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholderTextColor={theme.colors.gray300}
      />
    </Container>
  );
}
