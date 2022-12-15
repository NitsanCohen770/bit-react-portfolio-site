import React from 'react';
import { render } from '@testing-library/react';
import { BasicSettingsContext } from './settings-context.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSettingsContext />);
  const rendered = getByText('Settings Context');
  expect(rendered).toBeTruthy();
});
