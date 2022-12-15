import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import { Typography } from '@enlear/bit-react-portfolio-site-design-system.widgets.typography';
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
