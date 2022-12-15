import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import React from 'react';
import { useState } from 'react';
import { ThemeToggle } from './theme-toggle';

export const BasicThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <ThemeToggle
        isDark={isDark}
        onClick={() => setIsDark(!isDark)} />
    </ThemeProvider>
  );
}
