import React from 'react';
import { render } from '@testing-library/react';
import { DarkLinkText, LightLinkText } from './link-text.composition';

it('should render light link text', () => {
  const { getByText } = render(<LightLinkText />);
  const rendered = getByText('Hello, Link Text');
  expect(rendered).toBeTruthy();
});

it('should render dark link text', () => {
  const { getByText } = render(<DarkLinkText />);
  const rendered = getByText('Hello, Link Text');
  expect(rendered).toBeTruthy();
});
