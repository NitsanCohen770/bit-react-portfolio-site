import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
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
