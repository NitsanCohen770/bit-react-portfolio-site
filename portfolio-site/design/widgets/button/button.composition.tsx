import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import React from 'react';
import { Button } from './button';

export const LightButton = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Button value="Light Button" />
    </ThemeProvider>
  );
}

export const DarkButton = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Button value="Dark Button" />
    </ThemeProvider>
  );
}
