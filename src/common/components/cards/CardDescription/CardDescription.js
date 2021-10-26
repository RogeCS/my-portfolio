import styles from './CardDescription.module.css';

const CardDescription = ({ children, whiteText }) => (
	<p className={`${styles.description} custom`}>
		{children}
		<style jsx>
			{`
			.custom {
				${whiteText && 'color: white'}
			}
			`}
		</style>
	</p>
);

export default CardDescription;
