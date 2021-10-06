import CardDescription from '@components/cards/CardDescription/CardDescription';
import CardTitle from '@components/cards/CardTitle/CardTitle';
import DarkGrayCard from '@components/cards/DarkGrayCard/DarkGrayCard';
import SmallHeading from '@components/elements/SmallHeading';
import FullScreenContainer from '@containers/FullScreenContainer';
import MaxWidthContainer from '@containers/MaxWidthContainer';
import H1 from '@elements/H1';
import styles from './AboutMe.module.css';

const AboutMe = () => {
	return (
		<FullScreenContainer secondaryBackground id="about-me">
			<MaxWidthContainer>

				<SmallHeading>
					About Me
				</SmallHeading>
				<H1>Know me a little more</H1>

				<section className={styles.cards__wrapper}>
					<div className={styles.halfScreenCard}>
						<div className={styles.about_me}>
							<DarkGrayCard padding={64}>
								<CardTitle>Junior frontend developer</CardTitle>
								<CardDescription>I love creating and implementing new ideas with great attention to details and elegant layouts. I enjoy fronted developement, IT management and Artifitial intelligence</CardDescription>
							</DarkGrayCard>
						</div>
						<div className={styles.stats}>
							<DarkGrayCard>
							</DarkGrayCard>
							<DarkGrayCard>
							</DarkGrayCard>
							<DarkGrayCard>
							</DarkGrayCard>
							<DarkGrayCard>
							</DarkGrayCard>
						</div>	
					</div>
					<div className={styles.fullScreenCard}>
						<DarkGrayCard padding={64}>
							<CardTitle>Responsive<br/> design</CardTitle>
						</DarkGrayCard>
					</div>
				</section>
			</MaxWidthContainer>
		</FullScreenContainer>
	);
}

export default AboutMe;

