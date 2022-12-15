import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import React from 'react';
import { ContactForm } from './contact-form';

export const LightContactForm = () => {
  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <ContactForm
        onSubmit={handleSubmit}
      />
    </ThemeProvider>
  );
}

export const DarkContactForm = () => {
  const handleSubmit = async (values) => {
    console.log(values);
  };
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <ContactForm
        onSubmit={handleSubmit}
      />
    </ThemeProvider>
  );
}
