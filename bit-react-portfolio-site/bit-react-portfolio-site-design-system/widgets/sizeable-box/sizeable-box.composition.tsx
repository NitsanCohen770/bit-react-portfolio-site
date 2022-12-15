import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import { Typography } from '@enlear/bit-react-portfolio-site-design-system.widgets.typography';
import React from 'react';
import { SizeableBox } from './sizeable-box';

export const LightSizeableBox = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <SizeableBox
        size={7}
      >
        <Typography>
          This is a sizeable box
        </Typography>
      </SizeableBox>
    </ThemeProvider>
  );
}

export const DarkSizeableBox = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <SizeableBox
        size={7}
      >
        <Typography>
          This is a sizeable box
        </Typography>
      </SizeableBox>
    </ThemeProvider>
  );
}