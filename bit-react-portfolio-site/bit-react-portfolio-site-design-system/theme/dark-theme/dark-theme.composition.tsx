import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import { Button } from '@mui/material';
import React from 'react';
import { darkTheme } from './dark-theme';

export const DarkTheme = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Button
        variant="contained"
      >
        Hello, Dark Theme.
      </Button>
    </ThemeProvider>
  );
};