import React from 'react';
import { render } from '@testing-library/react';
import { LightButton } from './button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<LightButton />);
  const rendered = getByText('Light Button');
  expect(rendered).toBeTruthy();
});

