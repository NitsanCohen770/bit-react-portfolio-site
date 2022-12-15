import React from 'react';
import { Contact } from './contact';
import { Main } from '@enlear/bit-react-portfolio-site.layouts.main';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';

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

