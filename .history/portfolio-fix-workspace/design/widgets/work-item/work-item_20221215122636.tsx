import { SizeableBox } from '@showoff/design.widgets.sizeable-box';
import { Typography } from '@showoff/design.widgets.typography';
import { Box } from '@mui/material';
import React from 'react';

export type WorkItemProps = {
  /**
   * the size of the box.
   */
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  /**
   * the designation of the work item.
   */
  designation: string;

  /**
   * the company of the work item.
  */
  company: string;

  /**
   * period of the work item.
   */
  period: string;
};

export function WorkItem({ company, designation, period, size }: WorkItemProps) {
  return (
    <SizeableBox
      size={size}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <Box>
          <Typography
            variant="body2"
          >
            {designation}
          </Typography>
          <Typography
            variant="body2"
          >
            {company}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          fontWeight={700}
          color="text.secondary"
        >
          {period}
        </Typography>
      </Box>
    </SizeableBox>
  );
}
