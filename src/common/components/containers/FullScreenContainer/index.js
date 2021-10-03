import styles from './FullScreenContainer.module.css';

const FullScreenContainer = ({ children, lightBackground }) => {
	return (
		<div className={`${styles.container} ${ lightBackground ? styles.primary : styles.secondary }`}>
			{children}
		</div>
	);
};

export default FullScreenContainer;
