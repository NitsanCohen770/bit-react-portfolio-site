import React from 'react';
import { render } from '@testing-library/react';
import { LightProjects } from './projects.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<LightProjects />);
  const rendered = getByText('projects.');
  expect(rendered).toBeTruthy();
});
