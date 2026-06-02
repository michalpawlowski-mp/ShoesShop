export const lightTheme = {
  background: "#f7f7f5",
  surface: "#ffffff",
  text: "#1a1a1a",
  textShoesName: "#333",
  textShoesGender: "#777",
  textMuted: "#888",
  isDark: false,
};

export const darkTheme = {
  background: "#2b2b2b",
  surface: "#1c1c1c",
  text: "#f0f0f0",
  textShoesName: "#f0f0f0",
  textShoesGender: "#aaa",
  textMuted: "#aaa",
  isDark: true,
};

export type AppTheme = typeof lightTheme;
