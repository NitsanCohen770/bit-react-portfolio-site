import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
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
