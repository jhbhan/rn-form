import { StyleSheet } from "react-native";

const COLORS = {
  primary: "#A8D5BA", // pastel green
  secondary: "#F9DCC4", // creamy peach
  background: "#FFF8F0", // soft cream
  card: "#FFFFFF",
  textPrimary: "#3D3D3D",
  textSecondary: "#7B7B7B",
  border: "#E6E2DD",
  success: "#B4E0C5", // pastel mint
  danger: "#F7B2B7", // soft pink
};

const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
};

const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export default StyleSheet.create({
  // Layout
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.lg,
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

  // Buttons
  buttonPrimary: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonPrimaryText: {
    fontSize: FONT_SIZES.md,
    fontWeight: "bold",
    color: "#3D3D3D",
  },
  buttonSecondary: {
    backgroundColor: COLORS.secondary,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  buttonSecondarySelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  buttonSecondaryText: {
    fontSize: FONT_SIZES.md,
    fontWeight: "bold",
    color: "#3D3D3D",
  },

  buttonUnselected: {
    backgroundColor: 'white',
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  // Cards
  card: {
    backgroundColor: COLORS.card,
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
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: SPACING.sm,
    fontSize: FONT_SIZES.md,
    color: COLORS.textPrimary,
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
    backgroundColor: COLORS.success,
  },
  badgeDanger: {
    backgroundColor: COLORS.danger,
  },
  badgeText: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZES.sm,
    fontWeight: "bold",
  },
});

export { COLORS, FONT_SIZES, SPACING };
