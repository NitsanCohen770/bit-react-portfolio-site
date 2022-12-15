import React, { ReactNode } from 'react';
import { Chip as MuiChip } from '@mui/material';

export type ChipProps = {
  /**
   * The content of the chip.
   */
  content: string
};

export function Chip({ content }: ChipProps) {
  return (
    <MuiChip
      label={content}
      size='medium'
    />
  );
}
