import React from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export type TextQuestionProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export const TextQuestion: React.FC<TextQuestionProps> = ({ value, onChange, placeholder }: TextQuestionProps) => {
  const { themeStyle } = useTheme();
  return (
    <TextInput
      style={themeStyle.input}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
    />
  );
};
