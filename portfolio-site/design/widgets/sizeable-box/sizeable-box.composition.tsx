import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Typography } from '@showoff/design.widgets.typography';
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