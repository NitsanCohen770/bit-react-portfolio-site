import React, { ReactNode } from 'react';
import { CssBaseline, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@mui/material';

export type ThemeProviderProps = {
  /**
   * The children to render within the theme.
   */
  children?: ReactNode;

  /**
   * The theme to use.
   */
  theme: ThemeOptions;
};

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  return (
    <MuiThemeProvider
      theme={theme}
    >
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
