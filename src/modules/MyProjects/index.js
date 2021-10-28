import { connect } from 'react-redux';
import ProjectCard from '@components/cards/ProjectCard';
// import projects from '@mocks/data/projectCardData';
import styles from './MyProjects.module.css';

const MyProjects = (props) => {
  const { projects } = props;
  return (
    <div className={styles.container}>
      <div className={styles.projects_wrapper}>
        {projects && projects.map(project => {
          const defaultProps = {
            cover: '',
            title: '',
            date: '',
          };

          if (project.properties.Name.title.length)
            defaultProps.title = project.properties.Name.title[0].plain_text;

          if (project.cover !== null)
            defaultProps.cover = project.cover.file.url;

          if (project.properties.Date.date !== null)
            defaultProps.date = project.properties.Date.date.start;
          return (
            <ProjectCard
              key={project.id}
              pid={project.id}
              title={defaultProps.title}
              date={defaultProps.date}
              cover={defaultProps.cover}
            />
        )})}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.project.posts,
  }
};

export default connect(mapStateToProps, null)(MyProjects)
