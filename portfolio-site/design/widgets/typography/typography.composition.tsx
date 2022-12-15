import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import React from 'react';
import { Typography } from './typography';

export const BasicTypography = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Typography>hello world!</Typography>
    </ThemeProvider>
  );
}
