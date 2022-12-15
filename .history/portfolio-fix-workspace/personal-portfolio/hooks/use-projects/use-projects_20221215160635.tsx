import { Project, ProjectKind } from '@showoff/personal-portfolio.entities.project'; // remove unused import
import { sampleProjects } from '@showoff/personal-portfolio.mocks.sample-projects';
import { useEffect } from 'react'; // move to top and join with other imports
import { useState } from 'react';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      setProjects(sampleProjects());
    };
    loadProjects();
  }, []);

  return { projects, loading };
}
