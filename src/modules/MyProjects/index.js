import FullScreenContainer from '@containers/FullScreenContainer';
import MaxWidthContainer from '@containers/MaxWidthContainer';
import ProjectCard from '@components/cards/ProjectCard';
import H1 from '@elements/H1';
import SmallHeading from '@elements/SmallHeading';
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
