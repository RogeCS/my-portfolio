import Link from 'next/link';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ pid, title, date, cover }) => {
  return (
    <>
      <Link href={`/project/${pid}`} passHref>
        <div
          className={`color-inherit ${styles.container} test`}
          >
        </div>
      </Link>
      <style jsx>
      {`
      .test {
        width: 100%;
        height: 100%;
        background-image:url(${cover});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
      }
      `}
      </style>
    </>
  )
}

export default ProjectCard
