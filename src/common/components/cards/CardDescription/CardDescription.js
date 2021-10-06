import styles from './CardDescription.module.css';

const CardDescription = ({ children }) => (
	<p className={styles.description}>
		{children}
	</p>
);

export default CardDescription;
