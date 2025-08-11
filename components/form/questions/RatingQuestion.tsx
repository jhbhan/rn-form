import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export type RatingQuestionProps = {
  value: number | null;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
};

export const RatingQuestion = ({ value, onChange, min = 1, max = 5 }: RatingQuestionProps) => (
  <View style={styles.row}>
    {Array.from({ length: max - min + 1 }, (_, i) => i + min).map(num => (
      <TouchableOpacity
        key={num}
        style={[styles.star, value === num && styles.selected]}
        onPress={() => onChange(num)}
      >
        <Text style={styles.starText}>{'★'}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  star: {
    padding: 8,
    margin: 4,
  },
  selected: {
    backgroundColor: '#fde68a',
    borderRadius: 8,
  },
  starText: {
    fontSize: 24,
    color: '#fbbf24',
  },
});
