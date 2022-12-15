import { TypographyProps } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@enlear/bit-react-portfolio-site-design-system.widgets.typography';
import React from 'react';
import { useMemo } from 'react';
import { Fragment } from 'react';
import { BreadcrumbType } from './breadcrumb.type';
import { Link } from '@mui/material';
import { Heading } from '@enlear/bit-react-portfolio-site-design-system.widgets.heading';

export type BreadcrumbProps = {
  /**
   * The crumbs to be rendered in the breadcrumb
   */
  crumbs: BreadcrumbType[];
  typographyProps?: TypographyProps;
};

const getCrumb = ({ crumb, props }) => <Heading
  color="primary"
  fontWeight={700}
  value={crumb}
  {...props && { ...props }}
>
</Heading>

export function Breadcrumb({ crumbs, typographyProps }: BreadcrumbProps) {
  const totalCrumbs = useMemo(() => crumbs.length, [crumbs]);
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 0.5,
      alignItems: 'center',
    }}>
      {crumbs.map((crumb, index) => (
        <Fragment
          key={index}
        >
          {index !== totalCrumbs && <Heading
            color="textSecondary"
            fontWeight={700}
            value={'/ '}
            {...typographyProps && { ...typographyProps }}
          >
          </Heading>}
          {!!crumb.link ? <Link
            href={crumb.link}
            underline="none"
            style={{
              color: 'inherit'
            }}>
            {getCrumb({ crumb: crumb.crumb, props: typographyProps })}
          </Link> : getCrumb({ crumb: crumb.crumb, props: typographyProps })}
        </Fragment>
      ))}
    </Box>
  );
}
