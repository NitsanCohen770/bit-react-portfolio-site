import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
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
