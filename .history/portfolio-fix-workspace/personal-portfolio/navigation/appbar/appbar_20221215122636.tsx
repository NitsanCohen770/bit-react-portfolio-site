import { Header } from '@showoff/design.navigation.header';
import { ThemeToggle } from '@showoff/design.theme.theme-toggle';
import { SettingsConsumer } from '@showoff/personal-portfolio.contexts.settings-context';
import React from 'react';
import { Logo } from '@showoff/design.brand.logo';
import { Link } from '@mui/material';

export type AppbarProps = {
};

export function Appbar({ }: AppbarProps) {
  return (
    <SettingsConsumer>
      {({ theme, toggleTheme }) => (
        <Header
          logo={
            <Link
              href='/'
              underline='none'
              sx={{
                textDecoration: 'none'
              }}
            >
              <Logo />
            </Link>}
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
