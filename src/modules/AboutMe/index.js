import { SiReact, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import CardDescription from '@components/cards/CardDescription/CardDescription';
import CardTitle from '@components/cards/CardTitle/CardTitle';
import DarkGrayCard from '@components/cards/DarkGrayCard/DarkGrayCard';
import styles from './AboutMe.module.css';
import GridOfSmallCards from '@components/cards/GridOfSmallCards/GridOfSmallCards';

const icons = [
	{
		id: 1,
		icon: <SiReact />,
	},
	{
		id: 2,
		icon: <SiHtml5 />,
	},
	{
 		id: 3,
		icon: <SiCss3 />,
	},
	{
		id: 4,
		icon: <SiJavascript />,
	},
];

const AboutMe = () => {
	return (
		<section className={styles.cards__wrapper}>
			<div className={styles.halfScreenCard}>
					<DarkGrayCard padding={64}>
						<CardTitle>Junior frontend developer</CardTitle>
						<CardDescription>
							I love creating and implementing new ideas 
							with great attention to details and elegant layouts. 
							I enjoy fronted developement, IT management and Artifitial intelligence
						</CardDescription>
					</DarkGrayCard>
					<GridOfSmallCards icons={icons} />
			</div>
			<div className={styles.fullScreenCard}>
				<DarkGrayCard padding={64}>
					<CardTitle>Responsive<br/> design</CardTitle>
				</DarkGrayCard>
			</div>
		</section>
	);
}

export default AboutMe;

