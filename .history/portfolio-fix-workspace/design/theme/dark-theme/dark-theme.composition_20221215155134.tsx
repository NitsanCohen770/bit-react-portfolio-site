import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Button } from '@mui/material';
import React from 'react'; // move to top
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