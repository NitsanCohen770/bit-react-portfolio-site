import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import React from 'react';
import { Chip } from './chip';

export const DarkChip = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Chip
        content='Dark Chip'
      />
    </ThemeProvider>
  );
}

export const LightChip = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Chip
        content='Light Chip'
      />
    </ThemeProvider>
  );
}
