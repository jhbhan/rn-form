import React from 'react';
import { TextInput } from 'react-native';
import { inputStyles } from '../../../constants/styles/inputs';

export type DateQuestionProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export const DateQuestion: React.FC<DateQuestionProps> = ({ value, onChange, placeholder }: DateQuestionProps) => (
  <TextInput
    style={inputStyles.input}
    value={value}
    onChangeText={onChange}
    placeholder={placeholder || 'YYYY-MM-DD'}
  />
);
