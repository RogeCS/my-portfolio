import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description}) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default ProjectCard
