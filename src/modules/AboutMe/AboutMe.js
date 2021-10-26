import CardDescription from '@components/cards/CardDescription/CardDescription';
import CardTitle from '@components/cards/CardTitle/CardTitle';
import CardWithImage from '@components/cards/CardWithImage/CardWithImage';
import DarkGrayCard from '@components/cards/DarkGrayCard/DarkGrayCard';
import GridOfSmallCards from '@components/cards/GridOfSmallCards/GridOfSmallCards';
import MyHobbies from '@components/messages/MyHobbies/MyHobbies';
import icons from '../../common/data/iconsData';
import styles from './AboutMe.module.css';



const AboutMe = () => {
	return (
		<section className={styles.cards__wrapper}>
			<div className={styles.halfScreenCard}>
					<DarkGrayCard padding={64}>
						<CardTitle>Junior frontend developer</CardTitle>
						<CardDescription>
							I love creating and implementing new ideas
							with great attention to details and elegant layouts.
							I enjoy frontend developement and I am currently working with ReactJS, HTML, CSS and NextJS.
						</CardDescription>
					</DarkGrayCard>
					<GridOfSmallCards icons={icons} />
			</div>
			<div className={styles.fullScreenCard}>
				<CardWithImage title="Drivers">
				I am a 22 years old student who enjoys learning, being proactive, teamwork, and completing projects successfully.
				I believe that the best way to grow is by helping others grow with you.
				</CardWithImage>
			</div>
			<div className={styles.halfScreenCard}>
				<DarkGrayCard padding={64}>
					<CardTitle>Education</CardTitle>
					<CardDescription>
						{"I'm"} an undergraduate student in Information Technology at Tec de Monterrey. I took a concentration in IT Management where I learned about Project Management, Service Management, Governance, and Change Management.
					</CardDescription>
				</DarkGrayCard>
				<DarkGrayCard padding={64}>
					<CardTitle>Hobbies</CardTitle>
					<MyHobbies />
				</DarkGrayCard>
			</div>
		</section>
	);
}

export default AboutMe;

