import { StyleSheet } from 'react-native';
import { SPACING } from './spacing';
import { FONT_SIZES } from './typography';
import { ColorStyle } from './colors';

export const createInputStyles = (colors: ColorStyle) => {
  return StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: SPACING.sm,
      fontSize: FONT_SIZES.md,
      color: colors.textPrimary,
    },
    multipleChoiceContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  });
}