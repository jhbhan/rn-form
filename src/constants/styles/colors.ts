import { FormStyles } from "../types";

export interface ColorStyle {
  primary?: string;
  secondary?: string;
  background?: string;
  card?: string;
  textPrimary?: string;
  textSecondary?: string;
  border?: string;
  success?: string;
  danger?: string;
}

const defaultColors: ColorStyle = {
  primary: "#A8D5BA", // pastel green
  secondary: "#F9DCC4", // creamy peach
  background: "#FFF8F0", // soft cream
  card: "#FFFFFF",
  textPrimary: "#3D3D3D",
  textSecondary: "#7B7B7B",
  border: "#E6E2DD",
  success: "#B4E0C5", // pastel mint
  danger: "#F7B2B7", // soft pink
} as const;

export const getColors = (colors?: ColorStyle) => {
  return {
    primary: colors?.primary || defaultColors.primary,
    secondary: colors?.secondary || defaultColors.secondary,
    background: colors?.background || defaultColors.background,
    card: colors?.card || defaultColors.card,
    textPrimary: colors?.textPrimary || defaultColors.textPrimary,
    textSecondary: colors?.textSecondary || defaultColors.textSecondary,
    border: colors?.border || defaultColors.border,
    success: colors?.success || defaultColors.success,
    danger: colors?.danger || defaultColors.danger,
  }
}