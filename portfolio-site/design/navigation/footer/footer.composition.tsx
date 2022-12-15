import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import React from 'react';
import { Footer } from './footer';

export const LightFooter = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Footer
        leftContent={'Thanks for Visiting.'}
        rightContent={'© 2022 Ober. All Rights Reserved.'}
      />
    </ThemeProvider>
  );
}

export const DarkFooter = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Footer
        leftContent={'Thanks for Visiting.'}
        rightContent={'© 2022 Ober. All Rights Reserved.'}
      />
    </ThemeProvider>
  );
}
