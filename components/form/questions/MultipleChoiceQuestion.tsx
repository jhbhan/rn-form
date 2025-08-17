import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import sharedStyles, { COLORS, SPACING } from '../../../constants/styles';

export type MultipleChoiceQuestionProps = {
  value: string | null;
  onChange: (val: string) => void;
  options: string[];
};

export const MultipleChoiceQuestion = ({ value, onChange, options }: MultipleChoiceQuestionProps) => (
    <View style={[styles.multipleChoiceContainer]}>
        {options.map(option => (
            <TouchableOpacity
                key={option}
                style={[
                sharedStyles.buttonUnselected,
                value === option && sharedStyles.buttonSecondarySelected,
                { 
                    margin: SPACING.sm,
                    width: '100%'
                }
                ]}
                onPress={() => onChange(option)}
            >
                <Text style={sharedStyles.buttonSecondaryText}>{option}</Text>
            </TouchableOpacity>
        ))}
    </View>
);

const styles = StyleSheet.create({
    multipleChoiceContainer: {
        ...sharedStyles.row,
        flexDirection: 'column'
    }
})