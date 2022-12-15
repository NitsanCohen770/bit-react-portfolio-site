import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import React from 'react';
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

