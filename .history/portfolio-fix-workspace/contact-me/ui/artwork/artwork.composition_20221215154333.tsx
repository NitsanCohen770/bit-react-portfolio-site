import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import React from 'react'; // move to top
import { Artwork } from './artwork';

export const LightArtwork = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Artwork />
    </ThemeProvider>
  );
}

export const DarkArtwork = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Artwork />
    </ThemeProvider>
  );
}

