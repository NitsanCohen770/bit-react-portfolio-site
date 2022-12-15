import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import { Button } from '@enlear/bit-react-portfolio-site-design-system.widgets.button';
import { Heading } from '@enlear/bit-react-portfolio-site-design-system.widgets.heading';
import React from 'react';
import { SettingsProvider, SettingsConsumer } from './settings-context';

export const BasicSettingsContext = () => {

  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ theme, toggleTheme }) => (
          <ThemeProvider
            theme={theme === 'dark' ? darkTheme() : lightTheme()}
          >
            <Heading
              value={'Settings Context'}
            />
            <Button
              value={'Toggle Theme'}
              onClick={toggleTheme}
            />
          </ThemeProvider>
        )}
      </SettingsConsumer>
    </SettingsProvider>
  );
}
