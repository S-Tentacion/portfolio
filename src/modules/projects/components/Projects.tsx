import { motion } from 'framer-motion';

import EmptyState from '@/common/components/elements/EmptyState';
import { ProjectsProps } from '@/common/types/projects';

import ProjectCard from './ProjectCard';

interface ProjectsComponentProps {
  projects: ProjectsProps['projects'];
}

const Projects = ({ projects }: ProjectsComponentProps) => {
  const filteredProjects = projects.filter(
    (project) => project?.frontMatter.isShow
  );
  const sortedProjects = filteredProjects.sort(
    (a, b) => a.frontMatter.sort - b.frontMatter.sort
  );
  if (sortedProjects.length === 0) {
    return <EmptyState message='No Data' />;
  }

  return (
    <div className='grid sm:grid-cols-2 gap-5 pt-2 px-1'>
      {sortedProjects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
