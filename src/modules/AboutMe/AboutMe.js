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
				I'm a 23-year-old Mexican IT engineer who loves learning, taking initiative, working in teams, and completing projects successfully. 
				I believe that the best way to grow is by helping others grow alongside you
				</CardWithImage>
			</div>
			<div className={styles.halfScreenCard}>
				<DarkGrayCard padding={64}>
					<CardTitle>Education</CardTitle>
					<CardDescription>
						I hold a degree in Information Technology from Tec de Monterrey, where I specialized in IT Management. During my time as a student, I delved into various aspects of IT Management, including Project Management, Service Management, Governance, and Change Management.
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

