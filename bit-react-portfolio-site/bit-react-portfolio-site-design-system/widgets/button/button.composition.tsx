import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import React from 'react';
import { Button } from './button';

export const LightButton = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Button value="Light Button" />
    </ThemeProvider>
  );
}

export const DarkButton = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Button value="Dark Button" />
    </ThemeProvider>
  );
}
