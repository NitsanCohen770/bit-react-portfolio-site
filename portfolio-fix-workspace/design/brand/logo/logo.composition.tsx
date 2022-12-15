import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
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

