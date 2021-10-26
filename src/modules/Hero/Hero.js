import { BsArrowDownShort } from 'react-icons/bs';
import MaxWidthContainer from '@containers/MaxWidthContainer';
import CircleFillBounce from '@animations/CircleFillBounce';

import styles from './Hero.module.css';

const Hero = () => {
	return (
		<div id="title-hero">
			<MaxWidthContainer>
				<section className={styles.hero__container}>
					<hgroup className={styles.texts__wrapper}>
						<h1 className={styles.name}>Hi, <span className={styles.blue}>{"I'm"}</span> <br/> Rogelio</h1>
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
