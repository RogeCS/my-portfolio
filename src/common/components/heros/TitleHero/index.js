import Image from 'next/image';
import { BsDot } from 'react-icons/bs';
import FullScreenContainer from '@containers/FullScreenContainer';
import DownArrowCircleFillBounce from '@animations/DownArrowCircleFillBounce'
import styles from './TitleHero.module.css';

const TitleHero = () => {
	return (
		<FullScreenContainer lightBackground={false}>
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
					<Image src="/assets/static/undraw_Mobile_application.svg" alt="Cartoon image a code review" layout="fill"/>
				</div>
				<DownArrowCircleFillBounce />
			</div>
		</FullScreenContainer>
	);
};

export default TitleHero;
