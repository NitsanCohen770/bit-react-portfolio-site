import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import React from 'react';
import { History } from './history';

export const LightHistory = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <History />
    </ThemeProvider>
  );
}

export const DarkHistory = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <History />
    </ThemeProvider>
  );
}
