import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SPACING } from '../../../constants/styles/spacing';
import { useTheme } from '../context/ThemeContext';

export type TrueFalseQuestionProps = {
  value: boolean | null;
  onChange: (val: boolean) => void;
};

export const TrueFalseQuestion: React.FC<TrueFalseQuestionProps> = ({ value, onChange }: TrueFalseQuestionProps) => {
  const {themeStyle} = useTheme();

  const trueButtonStyle = value === true ? themeStyle.primaryButton : themeStyle.unselected;
  const falseButtonStyle = value === false ? themeStyle.primaryButton : themeStyle.unselected;

  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={[trueButtonStyle, styles.button]}
        onPress={() => onChange(true)}
      >
        <Text style={themeStyle.primaryButtonText}>True</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[falseButtonStyle, styles.button]}
        onPress={() => onChange(false)}
      >
        <Text style={themeStyle.primaryButtonText}>False</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  button: {
    flex: 1,
    marginHorizontal: SPACING.sm,
  },
});
