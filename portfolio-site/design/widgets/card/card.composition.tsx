import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import React from 'react';
import { Card } from './card';

export const LightCard = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Card
        title={'Project Name'}
        tags={['React', 'VSCode', 'Bit', 'Material-UI']}
        bannerImage={'https://images.unsplash.com/photo-1669798158874-9c05aa89d71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
        subtitle={'This is a sample project description'}
      />
    </ThemeProvider>
  );
}

export const DarkCard = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Card
        title={'Project Name'}
        tags={['React', 'VSCode', 'Bit', 'Material-UI']}
        bannerImage={'https://images.unsplash.com/photo-1669798158874-9c05aa89d71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
        subtitle={'This is a sample project description'}
      />
    </ThemeProvider>
  );
}
export const CardWithNoSubtitle = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Card
        title={'Project Name'}
        tags={['React', 'VSCode', 'Bit', 'Material-UI']}
        bannerImage={'https://images.unsplash.com/photo-1669798158874-9c05aa89d71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
      />
    </ThemeProvider>
  );
}

export const CardWithNoSubtitleNoTags = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Card
        title={'Project Name'}
        bannerImage={'https://images.unsplash.com/photo-1669798158874-9c05aa89d71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
      />
    </ThemeProvider>
  );
}