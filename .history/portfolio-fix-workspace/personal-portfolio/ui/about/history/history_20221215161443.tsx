import { Theme, useMediaQuery } from '@mui/material';
import { Margin, MarginType } from '@showoff/design.layouts.margin';
import { WorkItemProps } from '@showoff/design.widgets.work-item';
import { WorkItem } from '@showoff/design.widgets.work-item';
import React from 'react'; // move to top

const workItems: WorkItemProps[] = [
  {
    company: 'Cubic Telecom',
    designation: 'UX Engineer',
    period: '5 Years',
    size: 5,
  },
  {
    company: 'Cubic Telecom',
    designation: 'UX Engineer',
    period: '4 Years',
    size: 4,
  },
  {
    company: 'Cubic Telecom',
    designation: 'UX Engineer',
    period: '3 Years',
    size: 3,
  }
]

export type HistoryProps = {
};

export function History({ }: HistoryProps) { // if you don't have any props, remove curly braces and use props instead.
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm')); 
  // remove the div and use the fragment instead.

  return (
    <div>
      {workItems.map((workItem, index) => (
        <Margin
          key={index}
          mb={MarginType.SMALL}
        >
          <WorkItem {...workItem}
            {...smDown && {
              size: 10
            }}
          />
        </Margin>
      ))}
    </div>
  );
}
