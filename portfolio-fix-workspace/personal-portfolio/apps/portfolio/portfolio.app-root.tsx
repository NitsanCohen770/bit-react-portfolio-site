import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PortfolioApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <PortfolioApp />
  </BrowserRouter>
), document.getElementById('root'));

