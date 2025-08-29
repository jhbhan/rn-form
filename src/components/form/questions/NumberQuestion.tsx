import React from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export type NumberQuestionProps = {
  value: string | number;
  onChange: (val: string) => void;
  placeholder?: string;
};

export const NumberQuestion: React.FC<NumberQuestionProps> = ({ value, onChange, placeholder }: NumberQuestionProps) => {
  const { themeStyle } = useTheme();
  return (
    <TextInput
      style={themeStyle.input}
      value={String(value)}
      onChangeText={onChange}
      placeholder={placeholder}
      keyboardType="numeric"
    />
  );
};
