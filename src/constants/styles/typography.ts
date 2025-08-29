import { StyleSheet } from 'react-native';
import { SPACING } from './spacing';
import { ColorStyle } from './colors';

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
} as const;

export const createTypographyStyles = (colors: ColorStyle) => {
  return StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  heading: {
    fontSize: FONT_SIZES.xl,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: SPACING.sm,
  },
  subheading: {
    fontSize: FONT_SIZES.lg,
    fontWeight: "600",
    color: colors.textSecondary,
    marginBottom: SPACING.sm,
  },
  bodyText: {
    fontSize: FONT_SIZES.md,
    color: colors.textPrimary,
  },
  smallText: {
    fontSize: FONT_SIZES.sm,
    color: colors.textSecondary,
  },
})};

export type FontSizeKey = keyof typeof FONT_SIZES;