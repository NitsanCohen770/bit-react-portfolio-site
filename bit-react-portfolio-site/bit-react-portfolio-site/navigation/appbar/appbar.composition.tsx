import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import React from 'react';
import { Appbar } from './appbar';

export const LightAppbar = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Appbar />
    </ThemeProvider>
  );
}
export const DarkAppbar = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Appbar />
    </ThemeProvider>
  );
}
