import Image from 'next/image';
import { BsDot, BsArrowDownShort } from 'react-icons/bs';
import FullScreenContainer from '@containers/FullScreenContainer';
import CircleFillBounce from '@animations/CircleFillBounce'
import MobilePhone from '@animations/MobilePhone';
import styles from './TitleHero.module.css';

const TitleHero = () => {
	return (
		<FullScreenContainer lightBackground={false} id="title-hero">
			<div className={styles.container}>
				<div className={styles.about_me}>
					<h1 className={styles.title}>
						<a href="https://github.com/RogeCS">Rogelio Medina</a>
					</h1>
					<ul className={styles.skills_wrapper}>
						<li className={styles.skill_wrap}>
							<p className={styles.skill}>
								Freelance
							</p>
							<span className={styles.dot}>
								<BsDot />
							</span>
						</li>
						<li className={styles.skill_wrap}>
							<p className={styles.skill}>
								Frontend
							</p>
							<span className={styles.dot}>
								<BsDot />
							</span>
						</li>
						<li className={styles.skill_wrap}>
							<p className={styles.skill}>
								IT Engineer
							</p>
						</li>
					</ul>
				</div>
				<div className={styles.image_wrap}>
					<MobilePhone />
				</div>
				<CircleFillBounce scrollTo="about-me">
					<BsArrowDownShort />
				</CircleFillBounce>
			</div>
		</FullScreenContainer>
	);
};

export default TitleHero;
