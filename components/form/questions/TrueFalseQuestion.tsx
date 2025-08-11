import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export type TrueFalseQuestionProps = {
  value: boolean | null;
  onChange: (val: boolean) => void;
};

export const TrueFalseQuestion = ({ value, onChange }: TrueFalseQuestionProps) => (
  <View style={styles.row}>
    <TouchableOpacity
      style={[styles.button, value === true && styles.selected]}
      onPress={() => onChange(true)}
    >
      <Text>True</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.button, value === false && styles.selected]}
      onPress={() => onChange(false)}
    >
      <Text>False</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  button: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 8,
    backgroundColor: '#fff',
  },
  selected: {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
  },
});
