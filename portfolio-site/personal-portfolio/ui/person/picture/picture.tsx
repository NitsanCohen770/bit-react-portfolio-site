import { Artwork } from '@showoff/personal-portfolio.ui.person.artwork';
import { Box } from '@mui/material';
import React from 'react';

export type PictureProps = {
  /**
   * the picture URL to show
   */
  pictureUrl: string
};

export function Picture({ pictureUrl }: PictureProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{
        position: 'relative',
        top: 30,
        left: '30%'
      }}>
        <img
          src={pictureUrl}
          width={375}
          height={400}
        />
      </Box>
      <Box sx={{
        position: 'relative',
        top: 0,
        bottom: 0,
        right: 0,
        left: -285
      }}>
        <Artwork
          height={500}
          width={500}
        />
      </Box>
    </Box>
  );
}
