import { Margin, MarginType } from '@showoff/design.layouts.margin';
import { LinkText } from '@showoff/design.navigation.link-text';
import { Heading } from '@showoff/design.widgets.heading';
import { Typography } from '@showoff/design.widgets.typography';
import { Picture } from '@showoff/personal-portfolio.ui.person.picture';
import { Icons } from '@showoff/personal-portfolio.ui.social.icons';
import { Box, Theme, useMediaQuery } from '@mui/material';
import { Grid } from '@mui/material';
import React from 'react';

export type LandingProps = {
}; // The type should extend the sectionProps i.e & HTMLSectionProps

const PersonReachSection = () => ( // props: PersonReachSectionProps 
// pass the props to the section if needed
  <section>
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
  </section>
)

export function Landing({ }: LandingProps) {

  const AVATAR_URL = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80";
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

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
            {...mdDown && {
              textAlign: 'center'
            }}
          >
            Tobias Sundberg
          </Typography>
          <Margin
            mt={MarginType.SMALL}
            {...mdDown && {
              style: {
                textAlign: 'center',
              }
            }}
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
            <Typography
              {...mdDown && {
                textAlign: 'center'
              }}
            >
              Frontend developer, UX architect and Javascript engineer, Photochromic Lens enthusiast, practicing minimalist, and Pop Music & Jazz lover in search of flow.
            </Typography>
            {!mdDown && <PersonReachSection />}
          </Margin>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Picture
          pictureUrl={AVATAR_URL}
        />
      </Grid>
      {mdDown && (
        <Grid item
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PersonReachSection />
        </Grid>
      )}
    </Grid >
  );
}
