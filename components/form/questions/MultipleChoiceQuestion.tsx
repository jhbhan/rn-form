import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export type MultipleChoiceQuestionProps = {
  value: string | null;
  onChange: (val: string) => void;
  options: string[];
};

export const MultipleChoiceQuestion = ({ value, onChange, options }: MultipleChoiceQuestionProps) => (
  <View style={styles.row}>
    {options.map(option => (
      <TouchableOpacity
        key={option}
        style={[styles.button, value === option && styles.selected]}
        onPress={() => onChange(option)}
      >
        <Text>{option}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  button: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    margin: 6,
    backgroundColor: '#fff',
  },
  selected: {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
  },
});
