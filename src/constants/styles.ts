// Re-export from modular style system for backward compatibility
export * from './styles/index';

// Legacy default export for backward compatibility
import { StyleSheet } from 'react-native';
import { getColors } from './styles/colors';
import { SPACING } from './styles/spacing';
import { createTypographyStyles, FONT_SIZES } from './styles/typography';
import { FormStyles } from './types';
import { createButtonStyles, createInputStyles } from './styles/index';

export const createStyles = (customStyle?: FormStyles) => {
  const colors = getColors(customStyle?.colors);
  const layoutStyle = StyleSheet.create({
    // Layout
    screenContainer: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: SPACING.md,
      paddingVertical: SPACING.lg,
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
    center: {
      justifyContent: "center",
      alignItems: "center",
    },

    // Typography
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
    // Cards
    card: {
      backgroundColor: colors.card,
      borderRadius: 14,
      padding: SPACING.md,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.05,
      shadowRadius: 6,
      elevation: 2,
    },

    // Inputs
    input: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 10,
      padding: SPACING.sm,
      fontSize: FONT_SIZES.md,
      color: colors.textPrimary,
      backgroundColor: "#FFF",
    },

    // Badges
    badge: {
      paddingHorizontal: SPACING.sm,
      paddingVertical: SPACING.xs,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    badgeSuccess: {
      backgroundColor: colors.success,
    },
    badgeDanger: {
      backgroundColor: colors.danger,
    },
    badgeText: {
      color: colors.textPrimary,
      fontSize: FONT_SIZES.sm,
      fontWeight: "bold",
    },
  });

  const buttonStyle = createButtonStyles(colors);

  const inputStyle = createInputStyles(colors);
  const typographyStyle = createTypographyStyles(colors);

  return {
    ...layoutStyle,
    ...buttonStyle,
    ...inputStyle,
    ...typographyStyle
  };
}