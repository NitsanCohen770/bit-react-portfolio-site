import { darkTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.dark-theme';
import { lightTheme } from '@enlear/bit-react-portfolio-site-design-system.theme.light-theme';
import { ThemeProvider } from '@enlear/bit-react-portfolio-site-design-system.theme.theme-provider';
import { SettingsConsumer, SettingsProvider } from '@enlear/bit-react-portfolio-site.contexts.settings-context';
import { Main } from '@enlear/bit-react-portfolio-site.layouts.main';
import { About } from '@enlear/bit-react-portfolio-site.pages.about';
import { Contact } from '@enlear/bit-react-portfolio-site.pages.contact';
import { IndividualProject } from '@enlear/bit-react-portfolio-site.pages.individual-project';
import { Landing } from '@enlear/bit-react-portfolio-site.pages.landing';
import { Projects } from '@enlear/bit-react-portfolio-site.pages.projects';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export function PortfolioSiteApp() {
  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ theme }) => (
          <ThemeProvider
            theme={theme === 'dark' ? darkTheme() : lightTheme()}
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
