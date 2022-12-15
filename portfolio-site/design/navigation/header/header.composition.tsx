import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import React from 'react';
import { Header } from './header';
import { useState } from 'react';
import { Logo } from '@showoff/design.brand.logo';
import { ThemeToggle } from '@showoff/design.theme.theme-toggle';

export const LightHeader = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Header logo={<Logo />} navLinks={[
        { label: 'Projects', url: '/projects' },
        { label: 'Contact', url: '/contact' },
        { label: 'About', url: '/about' },
      ]}
        themeToggle={<ThemeToggle
          size='small'
          isDark={isDark}
          onClick={() => setIsDark(!isDark)} />}
      />
    </ThemeProvider>
  );
}

export const DarkHeader = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Header logo={<Logo />} navLinks={[
        { label: 'Projects', url: '/projects' },
        { label: 'Contact', url: '/contact' },
        { label: 'About', url: '/about' },
      ]}
        themeToggle={<ThemeToggle
          isDark={isDark}
          size='small'
          onClick={() => setIsDark(!isDark)} />}
      />
    </ThemeProvider>
  );
}

