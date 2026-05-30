import { useState, useEffect } from "react";

export const useSystemTheme = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  const [isDark, setIsDark] = useState(prefersDark.matches);

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    prefersDark.addEventListener("change", handler);
    return () => prefersDark.removeEventListener("change", handler);
  }, []);

  return isDark;
};
