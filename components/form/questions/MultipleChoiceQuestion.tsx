import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { buttonStyles, useButtonStyle } from '../../../constants/styles/buttons';
import { inputStyles } from '../../../constants/styles/inputs';
import { SPACING } from '../../../constants/styles/spacing';

export type MultipleChoiceQuestionProps = {
  value: string | null;
  onChange: (val: string) => void;
  options: string[];
};

export const MultipleChoiceQuestion = ({ value, onChange, options }: MultipleChoiceQuestionProps) => (
  <View style={inputStyles.multipleChoiceContainer}>
    {options.map(option => {
      const buttonStyle = useButtonStyle(
        value === option ? 'primary' : 'unselected'
      );
      
      return (
        <TouchableOpacity
          key={option}
          style={[buttonStyle, styles.optionButton]}
          onPress={() => onChange(option)}
        >
          <Text style={buttonStyles.primaryText}>{option}</Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  optionButton: {
    margin: SPACING.sm,
    width: '100%',
  },
});