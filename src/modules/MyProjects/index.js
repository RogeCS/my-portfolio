import FullScreenContainer from '@containers/FullScreenContainer';
import MaxWidthContainer from '@containers/MaxWidthContainer';
import ProjectCard from '@components/cards/ProjectCard';
import H1 from '@elements/H1';
import styles from './MyProjects.module.css';

const MyProjects = ({ projects }) => {
  return (
    <FullScreenContainer>
      <div className={styles.container}>
        <MaxWidthContainer>
          <H1>My Work</H1>
          <div className={styles.projects_wrapper}>
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </MaxWidthContainer>
      </div>
    </FullScreenContainer>
  )
}

export default MyProjects;
