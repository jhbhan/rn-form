import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { SPACING } from './spacing';
import { FONT_SIZES } from './typography';

export const inputStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: SPACING.sm,
    fontSize: FONT_SIZES.md,
    color: COLORS.textPrimary,
  },
  multipleChoiceContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
