import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { SettingsProvider, SettingsConsumer } from '@showoff/personal-portfolio.contexts.settings-context';
import { Main } from '@showoff/personal-portfolio.layouts.main';
import { About } from '@showoff/personal-portfolio.pages.about';
import { IndividualProject } from '@showoff/personal-portfolio.pages.individual-project';
import { Landing } from '@showoff/personal-portfolio.pages.landing';
import { Projects } from '@showoff/personal-portfolio.pages.projects';
import { Contact } from '@showoff/contact-me.page.contact';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const dark = darkTheme();
const light = lightTheme();

export function PortfolioApp() {
  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ theme }) => (
          <ThemeProvider
            theme={theme === 'dark' ? dark : light}
          >
            <Main>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<IndividualProject />} />
              </Routes>
            </Main>
          </ThemeProvider>
        )}
      </SettingsConsumer>
    </SettingsProvider >
  );
}
