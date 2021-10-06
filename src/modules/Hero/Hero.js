import Image from 'next/image';
import { BsArrowDownShort } from 'react-icons/bs';
import FullScreenContainer from '@containers/FullScreenContainer';
import MaxWidthContainer from '@containers/MaxWidthContainer';
import CircleFillBounce from '@animations/CircleFillBounce';

import styles from './Hero.module.css';

const Hero = () => {
	return (
		<div>
			<MaxWidthContainer>
				<section className={styles.hero__container}>
					<div className={styles.myImage__wrapper}>
						<div className={styles.myImage__wrap}>
							<Image src="/assets/static/my-photo.jpg" alt="rogelio's photo" height="200" width="200" layout="responsive" />
						</div>
					</div>
					<hgroup className={styles.texts__wrapper}>
						<h1 className={styles.name}>Rogelio Medina</h1>
						<h2 className={styles.job}>Frontend Developer</h2>
						<CircleFillBounce scrollTo="about-me">
							<BsArrowDownShort />
						</CircleFillBounce>
					</hgroup>	
				</section>
			</MaxWidthContainer>
		</div>
	);
};

export default Hero;
