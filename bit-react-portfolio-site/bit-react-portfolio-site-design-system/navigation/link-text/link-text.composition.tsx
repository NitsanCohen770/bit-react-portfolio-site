import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
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

