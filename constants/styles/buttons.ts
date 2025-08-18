import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { COLORS } from './colors';
import { SPACING } from './spacing';
import { FONT_SIZES } from './typography';

export const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 10,
    alignItems: "center",
  },
  secondary: {
    backgroundColor: COLORS.secondary,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  secondarySelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  unselected: {
    backgroundColor: 'white',
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  disabled: {
    opacity: 0.5,
  },
  primaryText: {
    fontSize: FONT_SIZES.md,
    fontWeight: "bold",
    color: "#3D3D3D",
  },
  secondaryText: {
    fontSize: FONT_SIZES.md,
    fontWeight: "bold",
    color: "#3D3D3D",
  },
});

export const useButtonStyle = (variant: 'primary' | 'secondary' | 'unselected', disabled?: boolean) => {
  return useMemo(() => [
    buttonStyles[variant],
    disabled && buttonStyles.disabled
  ], [variant, disabled]);
};
