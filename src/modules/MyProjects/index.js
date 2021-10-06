import ProjectCard from '@components/cards/ProjectCard';
import projects from '@mocks/data/projectCardData';
import styles from './MyProjects.module.css';

const MyProjects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projects_wrapper}>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
