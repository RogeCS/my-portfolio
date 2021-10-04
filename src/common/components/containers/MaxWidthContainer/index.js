import styles from './MaxWidthContainer.module.css';

const MaxWidthContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default MaxWidthContainer;
