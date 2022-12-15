import React from 'react';
import { render } from '@testing-library/react';
import { BasicMain } from './main.composition';

it('should render footer with correct text', () => {
  const { getByText } = render(<BasicMain />);
  const rendered = getByText('© 2022 Ober. All Rights Reserved.');
  expect(rendered).toBeTruthy();
});

it('should render content with correct text', () => {
  const { getByText } = render(<BasicMain />);
  const rendered = getByText('Hello World');
  expect(rendered).toBeTruthy();
});

