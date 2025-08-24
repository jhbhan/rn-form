export const COLORS = {
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

export type ColorKey = keyof typeof COLORS;
