import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import React from 'react';
import { LinkText } from './link-text';

export const LightLinkText = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <LinkText
        url='https://www.enlear.com'
        fontSize={22}
        iconSize='medium'
        fontWeight={400}
        linkText="Hello, Link Text" />
    </ThemeProvider>
  );
}

export const DarkLinkText = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <LinkText
        url='https://www.enlear.com'
        fontSize={22}
        iconSize='medium'
        fontWeight={400}
        linkText="Hello, Link Text" />
    </ThemeProvider>
  );
}

