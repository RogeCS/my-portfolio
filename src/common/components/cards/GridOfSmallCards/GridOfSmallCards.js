import DarkGrayCard from '@components/cards/DarkGrayCard/DarkGrayCard';
import styles from './GridOfSmallCards.module.css';

const GridOfSmallCards = ({ icons }) => {
	return (
		<section className={styles.stats}>
			{ icons.map((icon, key) => { 
				const { color } = icon;
				return (
				<DarkGrayCard key={key}>
					<div className={styles.stats_wrapper}>
						<div className={`${styles.react_icon} ${color}`}>
							{icon.icon}
							<p>{icon.text}</p>
						</div>
					</div>
				</DarkGrayCard>
			)})}
			<style jsx>
				{`
					.blueR {
						color: #61dafb;
					}

					.red {
						color: #e25e25;
					}

					.blueC {
						color: #026cb9;
					}

					.yellow {
						color: #efd81c;
					} 
				`}
			</style>
		</section>
	);
};

export default GridOfSmallCards;
