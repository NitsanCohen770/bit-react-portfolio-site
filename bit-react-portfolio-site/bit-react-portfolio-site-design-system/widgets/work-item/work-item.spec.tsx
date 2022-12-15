import React from 'react';
import { render } from '@testing-library/react';
import { LightWorkItem } from './work-item.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<LightWorkItem />);
  const rendered = getByText('Company');
  expect(rendered).toBeTruthy();
});
