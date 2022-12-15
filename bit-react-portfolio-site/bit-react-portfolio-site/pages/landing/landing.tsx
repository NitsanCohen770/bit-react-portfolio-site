import { Margin, MarginType } from '@enlear/bit-react-portfolio-site-design-system.layouts.margin';
import { LinkText } from '@enlear/bit-react-portfolio-site-design-system.navigation.link-text';
import { Heading } from '@enlear/bit-react-portfolio-site-design-system.widgets.heading';
import { Typography } from '@enlear/bit-react-portfolio-site-design-system.widgets.typography';
import { Picture } from '@enlear/bit-react-portfolio-site.ui.person.picture';
import { Icons } from '@enlear/bit-react-portfolio-site.ui.social.icons';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import React from 'react';

export type LandingProps = {
};

export function Landing({ }: LandingProps) {

  const AVATAR_URL = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80";

  return (
    <Grid
      container
      spacing={5}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
      >
        <Box sx={{ width: '100%' }}>
          <Typography
            fontWeight={700}
          >
            Tobias Sundberg
          </Typography>
          <Margin
            mt={MarginType.SMALL}
          >
            <Heading
              sx={{ lineHeight: 1.5, display: 'inline' }}
              value={<>
                I’M A <Heading
                  sx={{ color: (theme) => theme.palette.primary.main, lineHeight: 'inherit', display: 'inline' }}
                  value={'CREATIVE DEVELOPER WEB DESIGNER'}
                />
              </>}
            />
          </Margin>
          <Margin
            mt={MarginType.MEDIUM}
          >
            <Typography>
              Frontend developer, UX architect and Javascript engineer, Photochromic Lens enthusiast, practicing minimalist, and Pop Music & Jazz lover in search of flow.
            </Typography>
          </Margin>
          <Margin
            mt={MarginType.MEDIUM}
          >
            <LinkText
              linkText='Check my projects'
              url='/projects'
              color='primary'
              fontWeight={400}
              fontSize={16}
              iconSize='small'
            />
          </Margin>
          <Margin
            mt={MarginType.LARGE}
          >
            <Heading
              sx={{ lineHeight: 1.5, display: 'inline', color: (theme) => theme.palette.primary.main }}
              value={'Don\'t be a stranger!'}
              fontSize={16}
              fontWeight={400}
            />
            <Typography
              fontSize={14}
            >
              Connect with me online
            </Typography>
            <Icons />
          </Margin>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
      >
        <Picture
          pictureUrl={AVATAR_URL}
        />
      </Grid>
    </Grid >
  );
}
