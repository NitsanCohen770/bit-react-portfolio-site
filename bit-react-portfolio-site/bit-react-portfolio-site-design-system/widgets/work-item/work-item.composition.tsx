import React from 'react';
import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import { WorkItem } from './work-item';

export const LightWorkItem = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <WorkItem
        company='Company'
        designation='Designation'
        period='Period'
        size={5}
      />
    </ThemeProvider>
  );
}

export const DarkWorkItem = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <WorkItem
        company='Company'
        designation='Designation'
        period='Period'
        size={7}
      />
    </ThemeProvider>
  );
}