import React from 'react';
import { render } from '@testing-library/react';
import { DarkChip, LightChip } from './chip.composition';

it('should render with dark chip', () => {
  const { getByText } = render(<DarkChip />);
  const rendered = getByText('Dark Chip');
  expect(rendered).toBeTruthy();
});

it('should render with light chip', () => {
  const { getByText } = render(<LightChip />);
  const rendered = getByText('Light Chip');
  expect(rendered).toBeTruthy();
});
