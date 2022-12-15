import { Project, SampleProjectList } from '@enlear/bit-react-portfolio-site.entities.project';
import { useState } from 'react';
import { useEffect } from 'react';

export type UseProjectProps = {
  /**
   * the project id to fetch
   */
  id: string
};

export function useProject({ id }: UseProjectProps) {
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProject = async () => {
      if (!id) {
        return;
      }
      setLoading(true);
      const projectToShow = SampleProjectList.find((project) => project.id === id);
      setProject(projectToShow);
      setLoading(false);
    }
    loadProject();
  }, [id]);

  return { project, loading };
}
