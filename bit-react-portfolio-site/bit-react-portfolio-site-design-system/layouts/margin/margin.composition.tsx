import React from 'react';
import { Margin, MarginType } from './margin';

export const SmallMargin = () => {
  return (
    <Margin
      mb={MarginType.SMALL}
      mt={MarginType.SMALL}
    >
      Hello World!
    </Margin>
  );
}

export const MediumMargin = () => {
  return (
    <Margin
      mb={MarginType.MEDIUM}
      mt={MarginType.MEDIUM}
    >
      Hello World!
    </Margin>
  );
}

export const LargeMargin = () => {
  return (
    <Margin
      mb={MarginType.LARGE}
      mt={MarginType.LARGE}
    >
      Hello World!
    </Margin>
  );
}


