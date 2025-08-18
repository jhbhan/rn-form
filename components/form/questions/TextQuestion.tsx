import React from 'react';
import { TextInput } from 'react-native';
import { inputStyles } from '../../../constants/styles/inputs';

export type TextQuestionProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export const TextQuestion = ({ value, onChange, placeholder }: TextQuestionProps) => (
  <TextInput
    style={inputStyles.input}
    value={value}
    onChangeText={onChange}
    placeholder={placeholder}
  />
);
