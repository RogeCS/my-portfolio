import styles from './CardTitle.module.css';

const CardTitle = ({ children }) => (
	<h1 className={styles.title}>
		{children}
	</h1>
);

export default CardTitle;

