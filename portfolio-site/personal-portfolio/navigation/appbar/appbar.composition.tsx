import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
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
