import { SocialLinks } from '@teambit/people.ui.social-links';
import React, { ReactNode } from 'react';

export type IconsProps = {
};

export function Icons({ }: IconsProps) {
  return (
    <SocialLinks
      links={[
        { name: 'github', url: 'https://github.com' },
        { name: 'linkedin', url: 'https://linkedin.com' },
        { name: 'twitter', url: 'https://twitter.com' },
        { name: 'website', url: 'https://enlear.com' },
      ]}
      style={{
        display: 'flex',
        gap: 15,
        justifyContent: 'flex-start',
      }}
    />
  );
}
