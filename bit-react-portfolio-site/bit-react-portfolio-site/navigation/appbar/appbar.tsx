import { Header } from '@enlear/bit-react-portfolio-site-design-system.navigation.header';
import { ThemeToggle } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-toggle';
import { SettingsConsumer } from '@enlear/bit-react-portfolio-site.contexts.settings-context';
import React from 'react';
import { Logo } from '@showoff/design.brand.logo';

export type AppbarProps = {
};

export function Appbar({ }: AppbarProps) {
  return (
    <SettingsConsumer>
      {({ theme, toggleTheme }) => (
        <Header
          logo={<Logo />}
          navLinks={[
            { label: 'Projects', url: '/projects' },
            { label: 'Contact', url: '/contact' },
            { label: 'About me', url: '/about' },
          ]}
          themeToggle={<ThemeToggle
            isDark={theme === 'dark'}
            onClick={() => toggleTheme()}
            size='small'
          />}
        />
      )}
    </SettingsConsumer>
  );
}
