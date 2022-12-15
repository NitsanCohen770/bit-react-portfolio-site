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
}; // Please extend the the MuiThemeProviderProps i.e & MuiThemeProviderProps

export function ThemeProvider({ children, theme }: ThemeProviderProps) { // ...rest
  // destructuring the rest props and passing them to the MuiThemeProvider
  return (
    <MuiThemeProvider
      theme={theme}
    >
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
