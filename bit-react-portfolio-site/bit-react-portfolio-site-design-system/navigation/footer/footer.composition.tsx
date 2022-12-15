import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
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
