import React from 'react';
import { render } from '@testing-library/react';
import { LightToggleButton } from './toggle-button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<LightToggleButton />);
  const rendered = getByText('Option 1');
  expect(rendered).toBeTruthy();
});
