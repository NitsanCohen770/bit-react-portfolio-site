import React from 'react';
import { render } from '@testing-library/react';
import { LightAbout } from './about.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<LightAbout />);
  const rendered = getByText('About-me.');
  expect(rendered).toBeTruthy();
});
