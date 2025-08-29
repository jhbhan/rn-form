import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export type MultipleChoiceQuestionProps = {
  value: string | null;
  onChange: (val: string) => void;
  options: string[];
};

export const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({ value, onChange, options }: MultipleChoiceQuestionProps) => {
  const { themeStyle } = useTheme();
  return (
    <View style={themeStyle.multipleChoiceContainer}>
      {options.map(option => {
        const buttonStyle = value === option
        ? {
          button: themeStyle.primaryButton,
          text: themeStyle.primaryButtonText
        }
        : {
          button: themeStyle.secondaryButton,
          text: themeStyle.secondaryButtonText
        };
        return (
          <TouchableOpacity
            key={option}
            style={[buttonStyle.button, themeStyle.optionButton]}
            onPress={() => onChange(option)}
          >
            <Text style={buttonStyle.text}>{option}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}