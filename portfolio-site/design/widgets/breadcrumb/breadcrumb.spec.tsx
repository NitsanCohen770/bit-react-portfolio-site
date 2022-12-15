import React from 'react';
import { render } from '@testing-library/react';
import { LightBreadcrumb } from './breadcrumb.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<LightBreadcrumb />);
  const rendered = getByText('Breadcrumb');
  expect(rendered).toBeTruthy();
});


it('should render with the correct backticks', () => {
  const { getAllByText } = render(<LightBreadcrumb />);
  const rendered = getAllByText('/');
  expect(rendered.length).toBe(3);
});

