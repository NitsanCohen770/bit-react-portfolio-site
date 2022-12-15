import React from 'react';
import { Contact } from './contact'; // move to bottom (first components, then packages, then internal imports)
import { Main } from '@showoff/personal-portfolio.layouts.main';
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';

export const LightContactPage = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Main
      >
        <Contact />
      </Main>
    </ThemeProvider>
  );
}

export const DarkContactPage = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Main>
        <Contact />
      </Main>
    </ThemeProvider>
  );
}

