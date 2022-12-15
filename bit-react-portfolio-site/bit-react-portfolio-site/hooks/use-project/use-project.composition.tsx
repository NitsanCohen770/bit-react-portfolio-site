import React from 'react';
import { useProject } from './use-project';

export const BasicUseProject = () => {
  const { project, loading } = useProject({ id: '1' });
  return (
    <>
      {loading && <div>Loading...</div>}
      {project && <div>{project.name}</div>}
    </>
  );
}
