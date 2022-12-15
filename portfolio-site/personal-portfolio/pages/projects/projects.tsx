import { Margin, MarginType } from '@showoff/design.layouts.margin'
import { Breadcrumb } from '@showoff/design.widgets.breadcrumb';
import { Box, Grid, Link } from '@mui/material';
import React from 'react';
import { ProjectToggleButton } from '@showoff/personal-portfolio.ui.projects.project-toggle-button'
import { useCallback } from 'react';
import { useProjects } from '@showoff/personal-portfolio.hooks.use-projects';
import { ProjectKind } from '@showoff/personal-portfolio.entities.project';
import { Card } from '@showoff/design.widgets.card';

export type ProjectsProps = {
};

export function Projects({ }: ProjectsProps) {
  const [projectVariety, setProjectVariety] = React.useState<ProjectKind>('component-based');
  const { projects } = useProjects({ type: projectVariety });

  const handleProjectTypeToggle = useCallback((value: ProjectKind) => {
    setProjectVariety(value);
  }, [])

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <ProjectToggleButton
              value={projectVariety}
              onClick={handleProjectTypeToggle}
            />
          </Box>
          <Box>

          </Box>
        </Box>
      </Margin>
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
