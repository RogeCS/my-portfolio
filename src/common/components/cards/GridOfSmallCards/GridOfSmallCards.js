import DarkGrayCard from '@components/cards/DarkGrayCard/DarkGrayCard';
import styles from './GridOfSmallCards.module.css';

const GridOfSmallCards = ({ icons }) => {
	return (
		<section className={styles.stats}>
			{ icons.map(icon => (
				<DarkGrayCard>
					<div className={styles.stats_wrapper}>
						<div className={styles.react_icon}>
							{icon.icon}
						</div>
					</div>
				</DarkGrayCard>
			))}
		</section>
	);
};

export default GridOfSmallCards;
