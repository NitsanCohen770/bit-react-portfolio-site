import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import { Main } from '@enlear/bit-react-portfolio-site.layouts.main';
import React from 'react';
import { About } from './about';

export const LightAbout = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Main>
        <About />
      </Main>
    </ThemeProvider>
  );
}

export const DarkAbout = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Main>
        <About />
      </Main>
    </ThemeProvider>
  )
}
