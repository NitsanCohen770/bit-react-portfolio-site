import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Main } from '@showoff/personal-portfolio.layouts.main';
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
