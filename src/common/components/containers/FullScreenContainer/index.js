import styles from './FullScreenContainer.module.css';

const FullScreenContainer = ({ children, secondaryBackground, id }) => {
	return (
		<div
			id={id}
			className={`${styles.container} ${ secondaryBackground ? styles.secondary : styles.primary }`}
		>
			{children}
		</div>
	);
};

export default FullScreenContainer;
