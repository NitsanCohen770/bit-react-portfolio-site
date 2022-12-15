import { Header } from '@showoff/design.navigation.header';
import { ThemeToggle } from '@showoff/design.theme.theme-toggle';
import { SettingsConsumer } from '@showoff/personal-portfolio.contexts.settings-context';
import React from 'react';
import { Logo } from '@showoff/design.brand.logo';
import { Link } from '@mui/material';

export type AppbarProps = {
}; // extend the header props i.e & HeaderProps

export function Appbar({ }: AppbarProps) { // don't use curly braces for if you are not destructuring the props. use props instead i.e props: AppbarProps
  // pass the props to the Header component
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
