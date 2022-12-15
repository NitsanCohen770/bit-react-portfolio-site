import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
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
