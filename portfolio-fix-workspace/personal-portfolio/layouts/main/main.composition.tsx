import { lightTheme } from '@showoff/design.theme.light-theme';
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Typography } from '@showoff/design.widgets.typography';
import React from 'react';
import { Main } from './main';

export const BasicMain = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Main>
        <Typography variant="h1">Hello World</Typography>
      </Main>
    </ThemeProvider>
  );
}

export const DarkMain = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Main>
        <Typography variant="h1">Hello World</Typography>
      </Main>
    </ThemeProvider>
  );
}
