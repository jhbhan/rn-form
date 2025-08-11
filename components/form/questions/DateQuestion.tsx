import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export type DateQuestionProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export const DateQuestion = ({ value, onChange, placeholder }: DateQuestionProps) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChange}
    placeholder={placeholder || 'YYYY-MM-DD'}
  />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});
