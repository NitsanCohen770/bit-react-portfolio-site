import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import React from 'react';
import { Picture } from './picture';

const AVATAR_URL = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80";

export const LightPicture = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Picture
        pictureUrl={AVATAR_URL}
      />
    </ThemeProvider>
  );
}

export const DarkPicture = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Picture
        pictureUrl={AVATAR_URL}
      />
    </ThemeProvider>
  );
}
