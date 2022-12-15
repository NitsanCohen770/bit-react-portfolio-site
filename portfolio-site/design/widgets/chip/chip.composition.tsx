import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
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
