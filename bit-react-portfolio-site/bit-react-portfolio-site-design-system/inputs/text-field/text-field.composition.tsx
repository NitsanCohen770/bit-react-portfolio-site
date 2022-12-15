import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import React from 'react';
import { useState } from 'react';
import { TextField } from './text-field';

export const BasicTextField = () => {
  const [value, setValue] = useState<string>('');
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Basic Text Field"
      />
    </ThemeProvider>
  );
}
