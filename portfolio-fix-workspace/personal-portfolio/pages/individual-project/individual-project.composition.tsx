import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Main } from '@showoff/personal-portfolio.layouts.main';
import React from 'react';
import { Routes } from 'react-router-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import { IndividualProject } from './individual-project';

export const LightIndividualProject = () => {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Main>
        <MemoryRouter
          initialEntries={
            [
              { pathname: '/projects/1' }
            ]
          }
          initialIndex={0}
        >
          <Routes>
            <Route
              path='/projects/:id'
              element={<IndividualProject />}
            >
            </Route>
          </Routes>
        </MemoryRouter>
      </Main>
    </ThemeProvider>
  );
}

export const DarkIndividualProject = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Main>
        <MemoryRouter
          initialEntries={
            [
              { pathname: '/projects/1' }
            ]
          }
          initialIndex={0}
        >
          <Routes>
            <Route
              path='/projects/:id'
              element={<IndividualProject />}
            >
            </Route>
          </Routes>
        </MemoryRouter>
      </Main>
    </ThemeProvider>
  );
}

export const InvalidIndividualProject = () => {
  return (
    <ThemeProvider
      theme={darkTheme()}
    >
      <Main>
        <MemoryRouter
          initialEntries={
            [
              { pathname: '/projects/1123123' }
            ]
          }
          initialIndex={0}
        >
          <Routes>
            <Route
              path='/projects/:id'
              element={<IndividualProject />}
            >
            </Route>
          </Routes>
        </MemoryRouter>
      </Main>
    </ThemeProvider>
  );
}