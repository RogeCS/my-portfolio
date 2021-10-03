import { BsArrowDownShort } from 'react-icons/bs';
import styles from './DownArrowCircleFillBounce.module.css';

const DownArrowCircleFillBounce = () => {
	return (
		<div className={styles.stage}>
			<div className={`${styles.box} ${styles.bounce_7}`}>
				<div className={styles.down_arrow_icon}>
					<BsArrowDownShort />
				</div>
			</div>
		</div>
	);
};

export default DownArrowCircleFillBounce;

