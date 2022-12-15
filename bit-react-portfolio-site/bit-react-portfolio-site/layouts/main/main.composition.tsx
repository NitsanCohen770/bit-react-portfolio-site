import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import { Typography } from '@enlear/bit-react-portfolio-site-design-system.widgets.typography';
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
