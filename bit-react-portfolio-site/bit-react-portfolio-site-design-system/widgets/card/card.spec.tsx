import React from 'react';
import { render } from '@testing-library/react';
import { LightCard } from './card.composition';

it('should render with the correct title', () => {
  const { getByText } = render(<LightCard />);
  const rendered = getByText('Project Name');
  expect(rendered).toBeTruthy();
});
