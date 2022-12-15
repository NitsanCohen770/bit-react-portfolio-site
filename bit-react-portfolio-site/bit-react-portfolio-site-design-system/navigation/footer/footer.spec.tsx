import React from 'react';
import { render } from '@testing-library/react';
import { LightFooter } from './footer.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<LightFooter />);
  const rendered = getByText('Thanks for Visiting.');
  expect(rendered).toBeTruthy();
});
