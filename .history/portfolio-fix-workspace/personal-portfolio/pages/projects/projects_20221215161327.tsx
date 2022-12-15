import { Margin, MarginType } from '@showoff/design.layouts.margin'
import { Breadcrumb } from '@showoff/design.widgets.breadcrumb';
import { Grid, Link } from '@mui/material';
import React from 'react';
import { useProjects } from '@showoff/personal-portfolio.hooks.use-projects';
import { Card } from '@showoff/design.widgets.card';

export type ProjectsProps = {
}; // The type should extend the BreadCrumbProps i.e & BreadCrumbProps

export function Projects({ }: ProjectsProps) { // if you are not destructuring the props, you can remove the braces and receive the props directly i.e props: ProjectsProps
  const { projects } = useProjects();
 
  // remove the div if not needed
  // pass the crumbs as a prop to the Breadcrumb component
  return (
    <div>
      <Breadcrumb
        crumbs={[
          { crumb: 'projects.' }
        ]}
      />
      <Margin
        mt={MarginType.LARGE}
      >
        <Grid
          container
          spacing={3}
        >
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
            >
              <Link
                href={`/projects/${project.id}`}
                underline="none"
                sx={{ textDecoration: 'none' }}
              >
                <Card
                  title={project.name}
                  bannerImage={project.image}
                  subtitle={project.description}
                  tags={project.tags}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Margin>
    </div>
  );
}
