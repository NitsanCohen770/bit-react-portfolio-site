import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import { Main } from '@enlear/bit-react-portfolio-site.layouts.main';
import React from 'react';
import { Projects } from './projects';

export const LightProjects = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Main>
        <Projects />
      </Main>
    </ThemeProvider>
  );
}

export const DarkProjects = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Main>
        <Projects />
      </Main>
    </ThemeProvider>
  );
}
