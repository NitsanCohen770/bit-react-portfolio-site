import React from 'react';
import { render } from '@testing-library/react';
import { LightSizeableBox } from './sizeable-box.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<LightSizeableBox />);
  const rendered = getByText('This is a sizeable box');
  expect(rendered).toBeTruthy();
});
