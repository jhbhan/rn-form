import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { SPACING } from './spacing';

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
} as const;

export const typographyStyles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  heading: {
    fontSize: FONT_SIZES.xl,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  subheading: {
    fontSize: FONT_SIZES.lg,
    fontWeight: "600",
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
  },
  bodyText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textPrimary,
  },
  smallText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
  },
});

export type FontSizeKey = keyof typeof FONT_SIZES;
