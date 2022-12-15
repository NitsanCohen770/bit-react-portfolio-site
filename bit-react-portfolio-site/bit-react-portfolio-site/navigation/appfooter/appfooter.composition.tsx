import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
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

