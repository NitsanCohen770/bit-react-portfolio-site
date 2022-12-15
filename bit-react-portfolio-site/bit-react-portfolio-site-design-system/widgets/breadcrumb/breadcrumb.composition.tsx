import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import React from 'react';
import { Breadcrumb } from './breadcrumb';

export const LightBreadcrumb = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Breadcrumb
        typographyProps={{
          fontSize: 30
        }}
        crumbs={[
          { crumb: 'Home', link: '/' },
          { crumb: 'Components' },
          { crumb: 'Breadcrumb', link: '/component/breadcrumb' },
        ]}
      />
    </ThemeProvider>
  );
}

export const DarkBreadcrumb = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Breadcrumb
        typographyProps={{
          fontSize: 30
        }}
        crumbs={[
          { crumb: 'Home', link: '/' },
          { crumb: 'Components' },
          { crumb: 'Breadcrumb', link: '/component/breadcrumb' },
        ]}
      />
    </ThemeProvider>
  );
}

