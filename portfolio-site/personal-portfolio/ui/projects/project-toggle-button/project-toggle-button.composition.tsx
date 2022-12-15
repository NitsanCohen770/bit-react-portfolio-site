import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
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