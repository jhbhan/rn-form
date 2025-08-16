import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export type NumberQuestionProps = {
  value: string | number;
  onChange: (val: string) => void;
  placeholder?: string;
};

export const NumberQuestion = ({ value, onChange, placeholder }: NumberQuestionProps) => (
  <TextInput
    style={styles.input}
    value={String(value)}
    onChangeText={onChange}
    placeholder={placeholder}
    keyboardType="numeric"
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
