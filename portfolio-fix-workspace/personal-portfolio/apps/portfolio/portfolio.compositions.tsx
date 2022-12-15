import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PortfolioApp } from './app';

export const PortfolioBasic = () => {
  return (
    <MemoryRouter>
      <PortfolioApp />
    </MemoryRouter>
  );
};
