import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Typography } from '@showoff/design.widgets.typography';
import React from 'react';
import { ToggleButton } from './toggle-button';

export const LightToggleButton = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <ToggleButton
        options={[
          {
            label: <Typography
              variant="body2"
            >
              Option 1
            </Typography>,
            value: 'option1'
          },
          {
            label: <Typography
              variant="body2"
            >Option 2</Typography>,
            value: 'option2'
          }
        ]}
        onClick={() => {
          console.log('clicked');
        }}
      />
    </ThemeProvider>
  );
}

export const DarkToggleButton = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <ToggleButton
        options={[
          {
            label: <Typography
              variant="body2"
            >
              Option 1
            </Typography>,
            value: 'option1'
          },
          {
            label: <Typography
              variant="body2"
            >Option 2</Typography>,
            value: 'option2'
          }
        ]}
        onClick={() => {
          console.log('clicked');
        }}
      />
    </ThemeProvider>
  );
}
