import React from 'react';
import { render } from '@testing-library/react';
import { LightPicture } from './picture.composition';

it('should render an img tag', () => {
  const rendered = render(<LightPicture />);
  expect(rendered.getByRole('img')).toBeTruthy();
});
