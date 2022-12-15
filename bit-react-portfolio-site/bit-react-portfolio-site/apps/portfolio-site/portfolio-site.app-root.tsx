import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PortfolioSiteApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <PortfolioSiteApp />
  </BrowserRouter>
), document.getElementById('root'));

