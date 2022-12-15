import React from 'react';
import { useProjects } from './use-projects';

export const AllProjects = () => {
  const { loading, projects } = useProjects({});

  return (
    <>
      {loading && <div>Loading...</div>}
      {projects.map((project) => (
        <div key={project.id}>
          <p>{project.name}</p>
        </div>
      ))}
    </>
  );
}

export const AllMonolithProjects = () => {
  const { loading, projects } = useProjects({ type: 'monolithic' });

  return (
    <>
      {loading && <div>Loading...</div>}
      {projects.map((project) => (
        <div key={project.id}>
          <p>{project.name}</p>
        </div>
      ))}
    </>
  );
}

