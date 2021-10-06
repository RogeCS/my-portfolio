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
					<hgroup className={styles.texts__wrapper}>
						<h1 className={styles.name}>Hi, I'm<br/> Rogelio</h1>
						<p className={styles.profile_description}>Welcome to my portfolio. A happy frontend developer</p>
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
