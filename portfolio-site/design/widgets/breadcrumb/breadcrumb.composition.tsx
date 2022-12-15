import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
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

