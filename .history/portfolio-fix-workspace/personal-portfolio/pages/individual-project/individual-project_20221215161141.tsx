import { Margin, MarginType } from '@showoff/design.layouts.margin';
import { LinkText } from '@showoff/design.navigation.link-text';
import { Breadcrumb } from '@showoff/design.widgets.breadcrumb';
import { Chip } from '@showoff/design.widgets.chip';
import { Heading } from '@showoff/design.widgets.heading';
import { Typography } from '@showoff/design.widgets.typography';
import { useProject } from '@showoff/personal-portfolio.hooks.use-project';
import { Container, Grid } from '@mui/material';
import { Box, CardMedia } from '@mui/material';
import { SocialLinks } from '@teambit/people.ui.social-links';
import React from 'react';  // move to top
import { useParams } from 'react-router-dom';

export type IndividualProjectProps = {
}; // The type should extend the GridProps i.e & GridProps

export function IndividualProject({ }: IndividualProjectProps) { // if you are not destructuring the props, you can remove the braces and receive the props directly i.e props: IndividualProjectProps
  const { id } = useParams();
  const { project } = useProject({ id: id as string })

  if (!project) {
    return (
      <Box sx={{ display: 'flex', my: 15, justifyContent: 'center' }}>
        <Heading
          value='Project not found'
        />
      </Box>
    )
  }

  return (
    <div>
      <Grid container>
        <Grid item
          xs={4}
          md={4}
        >
          <LinkText
            linkText='Back to Projects'
            url='/projects'
            color='secondary'
          />
        </Grid>
        <Grid item
          xs={4}
          md={4}
        >
          <Heading
            value={project.name}
            sx={{ color: (theme) => theme.palette.primary.main }}
          />
        </Grid>
        <Grid item
          xs={4}
          md={4}
        />
      </Grid>
      <Container
        maxWidth='md'
      >
        <Margin
          mt={MarginType.LARGE}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CardMedia
              component='img'
              image={project.image}
              sx={{
                height: '496px',
                borderRadius: '8px',
                width: '100%'
              }}
            />
          </Box>
        </Margin>
      </Container>
      <Container
        maxWidth='sm'
      >
        <Margin
          mt={MarginType.LARGE}
        >
          <Breadcrumb
            crumbs={[
              { crumb: 'Description' }
            ]}
            typographyProps={{
              color: 'text.primary',
              variant: 'body1',
              fontSize: 18
            }}
          />
          <Typography>
            {project.description}
          </Typography>
        </Margin>
        {project.tags.length > 0 && (
          <Margin
            mt={MarginType.MEDIUM}
          >
            <Breadcrumb
              crumbs={[
                { crumb: 'Attributes' }
              ]}
              typographyProps={{
                color: 'text.primary',
                variant: 'body1',
                fontSize: 18
              }}
            />
            <Box sx={{ display: 'flex', gap: 2, mt: 1, flexWrap: 'wrap' }}>
              {project.tags.map((tag) => (
                <Chip
                  content={tag}
                />
              ))}
            </Box>
          </Margin>
        )}
        <Margin
          mt={MarginType.LARGE}
        >
          <SocialLinks
            links={[
              ...project.links.github ? [{
                name: 'github',
                url: project.links.github
              }] : [],
              ...project.links.website ? [{
                name: 'website',
                url: project.links.website
              }] : []
            ] as []}
            style={{
              display: 'flex',
              gap: 15,
              justifyContent: 'flex-start',
            }}
          />
        </Margin>
      </Container>
    </div >
  );
}
