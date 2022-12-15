import React, { ReactNode } from 'react';
import { Card as MUICard } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@enlear/bit-react-portfolio-site-design-system.widgets.typography'
import { Chip } from '@enlear/bit-react-portfolio-site-design-system.widgets.chip';
import { Box } from '@mui/material';
import { Margin, MarginType } from '@enlear/bit-react-portfolio-site-design-system.layouts.margin';

export type CardProps = {
  /**
   * The title of the card
   */
  title: string

  /**
   * The subtitle of the card
   */
  subtitle?: string

  /**
   * the tags of the card
   */
  tags?: string[]

  /**
   * banner image of the card
   */
  bannerImage?: string
};

export function Card({ subtitle, tags = [], title, bannerImage }: CardProps) {

  if (!bannerImage) {
    throw new Error('bannerImage is required');
  }

  return (
    <MUICard
      variant='outlined'
      sx={{
        background: (theme) => theme.palette.background.paper
      }}
    >
      <CardMedia
        component="img"
        image={bannerImage}
        height={180}
      />
      <CardContent>
        <Typography variant="body1"
          fontWeight={700}
          fontSize={18}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2"
            fontWeight={400}
            lineHeight={1.5}
            color="textSecondary"
          >
            An E-Commerce application for buying cotton products
          </Typography>
        )}
        {tags.length > 0 && (
          <Margin
            mt={MarginType.SMALL}
          >
            <Box sx={{ display: "flex", gap: 1, flexWrap: 'wrap', }}>
              {tags.map((tag, index) => (
                <Chip
                  content={tag}
                  key={`${tag}#${index}`}
                />
              ))}
            </Box>
          </Margin>
        )}
      </CardContent>
    </MUICard >
  );
}
