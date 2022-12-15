import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
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
