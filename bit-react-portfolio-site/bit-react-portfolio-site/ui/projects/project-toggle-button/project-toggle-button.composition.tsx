import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import React from 'react';
import { ProjectToggleButton } from './project-toggle-button';

export const LightProjectToggleButton = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <ProjectToggleButton
        onClick={(value) => console.log(value)}
      />
    </ThemeProvider>
  );
}

export const DarkProjectToggleButton = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <ProjectToggleButton
        onClick={(value) => console.log(value)}
      />
    </ThemeProvider>
  );
}