import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Button } from '@mui/material';
import React from 'react';
import { lightTheme } from './light-theme';

export function LightTheme() {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Button>
        Hello, Light Theme.
      </Button>
    </ThemeProvider>
  )
}
