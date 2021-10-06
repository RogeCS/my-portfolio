import styles from './ProjectCard.module.css';

const ProjectCard = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default ProjectCard
