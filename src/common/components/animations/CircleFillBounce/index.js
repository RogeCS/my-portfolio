import { Link } from 'react-scroll';
import styles from './CircleFillBounce.module.css';

const CircleFillBounce = ({ children, scrollTo }) => {
	return (
		<div className={styles.stage}>
			<Link to={scrollTo} spy={true} smooth={true}>
				<div className={`${styles.box} ${styles.bounce_7}`}>
					<div className={styles.down_arrow_icon}>
						{children}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CircleFillBounce;

