import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import React from 'react';
import { Logo } from './logo';

export const LightLogo = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Logo />
    </ThemeProvider>
  );
}
export const DarkLogo = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Logo />
    </ThemeProvider>
  );
}

