import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import React from 'react';
import { Appfooter } from './appfooter';

export const LightBasicAppfooter = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Appfooter />
    </ThemeProvider>
  );
}

export const DarkBasicAppfooter = () => {
  return (
    <ThemeProvider theme={darkTheme()}>
      <Appfooter />
    </ThemeProvider>
  );
}

