import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import React from 'react';
import { Heading } from './heading';

export const BasicHeading = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Heading
        value='Testing Typography'
      />
    </ThemeProvider>
  );
}
