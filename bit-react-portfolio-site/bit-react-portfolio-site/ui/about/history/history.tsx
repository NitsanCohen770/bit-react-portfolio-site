import { Margin, MarginType } from '@enlear/bit-react-portfolio-site-design-system.layouts.margin';
import { WorkItemProps } from '@enlear/bit-react-portfolio-site-design-system.widgets.work-item';
import { WorkItem } from '@enlear/bit-react-portfolio-site-design-system.widgets.work-item';
import React from 'react';

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

export function History({ }: HistoryProps) {
  return (
    <div>
      {workItems.map((workItem, index) => (
        <Margin
          key={index}
          mb={MarginType.SMALL}
        >
          <WorkItem {...workItem} />
        </Margin>
      ))}
    </div>
  );
}
