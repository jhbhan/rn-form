import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export type TextQuestionProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export const TextQuestion = ({ value, onChange, placeholder }: TextQuestionProps) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChange}
    placeholder={placeholder}
  />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});
