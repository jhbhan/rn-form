import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import baseStyle from '../../../constants/styles';

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
      <Text style={baseStyle.buttonPrimaryText}>True</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.button, value === false && styles.selected]}
      onPress={() => onChange(false)}
    >
      <Text style={baseStyle.buttonPrimaryText}>False</Text>
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
    flex: 1,
    padding: 12,
    marginHorizontal: 8,
    ...baseStyle.buttonUnselected, // Use base styles for consistency
  },
  selected: baseStyle.buttonPrimary,
});
