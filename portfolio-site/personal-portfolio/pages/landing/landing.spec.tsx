import React from 'react';
import { render } from '@testing-library/react';
import { DarkLandingPage } from './landing.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<DarkLandingPage />);
  const rendered = getByText('CREATIVE DEVELOPER WEB DESIGNER');
  expect(rendered).toBeTruthy();
});
