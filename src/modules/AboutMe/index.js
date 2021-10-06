import SmallHeading from '@components/elements/SmallHeading';
import FullScreenContainer from '@containers/FullScreenContainer';
import MaxWidthContainer from '@containers/MaxWidthContainer';
import H1 from '@elements/H1';

const AboutMe = () => {
	return (
		<FullScreenContainer secondaryBackground id="about-me">
			<MaxWidthContainer>
				<SmallHeading>
					About Me
				</SmallHeading>
				<H1>IT student and React freelance</H1>
			</MaxWidthContainer>
		</FullScreenContainer>
	);
}

export default AboutMe;

