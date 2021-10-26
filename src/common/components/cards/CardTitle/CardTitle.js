import styles from './CardTitle.module.css';

const CardTitle = ({ children, whiteText }) => (
	<h1 className={`${styles.title} custom`}>
		{children}
		<style jsx>
			{`
			.custom {
				${whiteText && 'color: white'}
			}
			`}
		</style>
	</h1>
);

export default CardTitle;

