import React from 'react';
import { render } from '@testing-library/react';
import { LightProjectToggleButton } from './project-toggle-button.composition';

it('should render with the component based text', () => {
  const { getByText } = render(<LightProjectToggleButton />);
  const rendered = getByText('Component-based');
  expect(rendered).toBeTruthy();
});

it('should render with the monolithic text', () => {
  const { getByText } = render(<LightProjectToggleButton />);
  const rendered = getByText('Monolithic');
  expect(rendered).toBeTruthy();
});

