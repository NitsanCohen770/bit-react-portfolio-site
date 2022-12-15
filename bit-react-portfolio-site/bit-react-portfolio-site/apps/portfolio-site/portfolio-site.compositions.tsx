import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PortfolioSiteApp } from './app';

export const PortfolioSiteBasic = () => {
  return (
    <MemoryRouter>
      <PortfolioSiteApp />
    </MemoryRouter>
  );
};
