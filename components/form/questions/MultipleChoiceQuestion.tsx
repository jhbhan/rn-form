import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import sharedStyles, { COLORS, SPACING } from '../../../constants/styles';

export type MultipleChoiceQuestionProps = {
  value: string | null;
  onChange: (val: string) => void;
  options: string[];
};

export const MultipleChoiceQuestion = ({ value, onChange, options }: MultipleChoiceQuestionProps) => (
  <View style={[sharedStyles.row, { flexWrap: 'wrap', justifyContent: 'center', marginBottom: SPACING.md }] }>
    {options.map(option => (
      <TouchableOpacity
        key={option}
        style={[
          sharedStyles.buttonUnselected,
          value === option && sharedStyles.buttonSecondarySelected,
          { margin: SPACING.sm }
        ]}
        onPress={() => onChange(option)}
      >
        <Text style={sharedStyles.buttonSecondaryText}>{option}</Text>
      </TouchableOpacity>
    ))}
  </View>
);
