import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Main } from '@showoff/personal-portfolio.layouts.main';
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
