import { Project, ProjectKind, SampleProjectList } from '@enlear/bit-react-portfolio-site.entities.project';
import { useEffect } from 'react';
import { useState } from 'react';

export type UseProjectsProps = {
  type?: ProjectKind;
};

export function useProjects({ type }: UseProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      if (!type) {
        setProjects([]);
      } else {
        setProjects(SampleProjectList.filter((project) => project.type === type));
      }
      setLoading(false);
    };
    loadProjects();
  }, [type]);

  return { projects, loading };
}
