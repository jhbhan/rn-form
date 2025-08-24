import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { buttonStyles, useButtonStyle } from '../../../constants/styles/buttons';
import { SPACING } from '../../../constants/styles/spacing';

export type TrueFalseQuestionProps = {
  value: boolean | null;
  onChange: (val: boolean) => void;
};

export const TrueFalseQuestion: React.FC<TrueFalseQuestionProps> = ({ value, onChange }: TrueFalseQuestionProps) => {
  const trueButtonStyle = useButtonStyle(value === true ? 'primary' : 'unselected');
  const falseButtonStyle = useButtonStyle(value === false ? 'primary' : 'unselected');
  
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={[trueButtonStyle, styles.button]}
        onPress={() => onChange(true)}
      >
        <Text style={buttonStyles.primaryText}>True</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[falseButtonStyle, styles.button]}
        onPress={() => onChange(false)}
      >
        <Text style={buttonStyles.primaryText}>False</Text>
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
