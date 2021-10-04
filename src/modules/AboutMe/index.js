import FullScreenContainer from '@containers/FullScreenContainer';
import MaxWidthContainer from '@containers/MaxWidthContainer';
import H1 from '@elements/H1';

const AboutMe = () => {
	return (
		<FullScreenContainer id="about-me">
			<MaxWidthContainer>
				<H1>About Me</H1>
			</MaxWidthContainer>
		</FullScreenContainer>
	);
}

export default AboutMe;

