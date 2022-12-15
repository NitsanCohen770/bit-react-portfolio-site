import React from 'react';
import { render } from '@testing-library/react';
import { LightAppbar } from './appbar.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<LightAppbar />);
  const rendered = getByText('Projects');
  expect(rendered).toBeTruthy();
});
