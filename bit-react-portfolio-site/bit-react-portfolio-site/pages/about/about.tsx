import React from 'react';
import { Margin, MarginType } from '@enlear/bit-react-portfolio-site-design-system.layouts.margin';
import { LinkText } from '@enlear/bit-react-portfolio-site-design-system.navigation.link-text';
import { Breadcrumb } from '@enlear/bit-react-portfolio-site-design-system.widgets.breadcrumb';
import { Heading } from '@enlear/bit-react-portfolio-site-design-system.widgets.heading';
import { Typography } from '@enlear/bit-react-portfolio-site-design-system.widgets.typography';
import { Picture } from '@enlear/bit-react-portfolio-site.ui.person.picture';
import { Grid } from '@mui/material';
import { History } from '@enlear/bit-react-portfolio-site.ui.about.history';
import { TextIcon } from '@enlear/bit-react-portfolio-site-design-system.widgets.text-icon';
import Download from '@mui/icons-material/Download';

export type AboutProps = {
};

export function About({ }: AboutProps) {
  return (
    <>
      <Grid
        container
        spacing={5}
      >
        <Grid item xs={12}
          md={6}
        >
          <Breadcrumb
            crumbs={[
              { crumb: 'About-me.' },
            ]}
            typographyProps={{
              variant: 'body2',
              fontSize: 18,
              color: 'text.primary',
            }}
          />
          <Margin
            mt={MarginType.MEDIUM}
          >
            <Heading
              sx={{ color: (theme) => theme.palette.primary.main, lineHeight: 1.5, display: 'inline' }}
              value='I’m Tobias Sundberg, a Creative web developer UX Engineer and a designOps. Working remotely from sunny Dublin, Ireland.'
            />
          </Margin>
          <Margin
            mt={MarginType.MEDIUM}
          >
            <Typography
              color={'text.secondary'}
            >
              I’ve spent the past 12+ years working across different areas of digital design; front-end development, email design, marketing site pages, app UI/UX, to my current role designing products for mobile platforms.
            </Typography>
          </Margin>
          <Margin mt={MarginType.MEDIUM}>
            <Typography
              color={'text.secondary'}
            >
              These days my time is spent researching, designing, prototyping, and coding. I also help designers get started with their careers.
            </Typography>
          </Margin>
          <Margin mt={MarginType.MEDIUM}>
            <Typography
              color={'text.secondary'}
            >
              Out of the office you’ll find me dreaming of soccer, playing bass guitar, and petting all the good dogs.
            </Typography>
          </Margin>
        </Grid>
        <Grid item xs={12}
          md={6}
        >
          <Picture
            pictureUrl={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"}
          />
        </Grid>
      </Grid >
      <div>
        <Margin mt={MarginType.LARGE}>
          <LinkText
            linkText='Check my projects.'
            url='/projects'
          />
        </Margin>
        <Margin mt={MarginType.EXTRA_LARGE}>
          <Heading
            value="A Brief History"
          />
          <Margin
            mt={MarginType.MEDIUM}
          >
            <History />
          </Margin>
          <Margin
            mt={MarginType.MEDIUM}
          >
            <TextIcon
              icon={<Download />}
              text='Download CV'
            />
          </Margin>
        </Margin>
      </div>
    </>
  );
}
