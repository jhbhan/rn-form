import React from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export type DateQuestionProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export const DateQuestion: React.FC<DateQuestionProps> = ({ value, onChange, placeholder }: DateQuestionProps) => {
  const { themeStyle } = useTheme();
  return (
    <TextInput
      style={themeStyle.input}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder || 'YYYY-MM-DD'}
    />
  );
};
