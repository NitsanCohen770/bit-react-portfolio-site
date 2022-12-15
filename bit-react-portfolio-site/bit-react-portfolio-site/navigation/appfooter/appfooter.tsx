import { Footer } from '@enlear/bit-react-portfolio-site-design-system.navigation.footer';
import React, { ReactNode } from 'react';

export type AppfooterProps = {
};

export function Appfooter({ }: AppfooterProps) {
  return (
    <Footer
      rightContent='© 2022 Ober. All Rights Reserved.'
      leftContent='Thanks for visiting.'
    />
  );
}
