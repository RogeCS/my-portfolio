import styles from './FullScreenContainer.module.css';

const FullScreenContainer = ({ children, lightBackground, id }) => {
	return (
		<div
			id={id}
			className={`${styles.container} ${ lightBackground ? styles.primary : styles.secondary }`}
		>
			{children}
		</div>
	);
};

export default FullScreenContainer;
