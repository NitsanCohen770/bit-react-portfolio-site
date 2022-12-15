import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import { Main } from '@enlear/bit-react-portfolio-site.layouts.main';
import React from 'react';
import { Landing } from './landing';

export const LightLandingPage = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Main>
        <Landing />
      </Main>
    </ThemeProvider>
  );
}

export const DarkLandingPage = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Main>
        <Landing />
      </Main>
    </ThemeProvider>
  );
}
