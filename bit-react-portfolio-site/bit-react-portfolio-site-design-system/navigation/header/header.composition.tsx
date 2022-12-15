import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import React from 'react';
import { Header } from './header';
import { useState } from 'react';
import { Logo } from '@showoff/design.brand.logo';
import { ThemeToggle } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-toggle';

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

