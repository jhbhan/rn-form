import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { SPACING } from './spacing';
import { FONT_SIZES } from './typography';
import { ColorStyle } from './colors';

export const createButtonStyles = (colors: ColorStyle) => {
 return StyleSheet.create({
    primaryButton: {
      backgroundColor: colors.primary,
      paddingVertical: SPACING.sm,
      paddingHorizontal: SPACING.lg,
      borderRadius: 10,
      alignItems: "center",
    },
    secondaryButton: {
      backgroundColor: colors.secondary,
      paddingVertical: SPACING.sm,
      paddingHorizontal: SPACING.lg,
      borderRadius: 10,
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.border,
    },
    secondarySelected: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    unselected: {
      backgroundColor: 'white',
      paddingVertical: SPACING.sm,
      paddingHorizontal: SPACING.lg,
      borderRadius: 10,
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.border,
    },
    disabledButton: {
      opacity: 0.5,
    },
    primaryButtonText: {
      fontSize: FONT_SIZES.md,
      fontWeight: "bold",
      color: "#3D3D3D",
    },
    secondaryButtonText: {
      fontSize: FONT_SIZES.md,
      fontWeight: "bold",
      color: "#3D3D3D",
    },
    fullWidth: {
      flex: 1
    },
    optionButton: {
      margin: SPACING.sm,
      width: '100%',
    }
  });
}