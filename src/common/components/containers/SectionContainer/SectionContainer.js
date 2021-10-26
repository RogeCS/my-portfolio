import FullScreenContainer from '@containers/FullScreenContainer';
import MaxWidthContainer from '@containers/MaxWidthContainer';
import SmallHeading from '@elements/SmallHeading';
import H1 from '@elements/H1';

const SectionContainer = ({ children, id, secondaryBackground, title, subHeader }) => {
	return (
		<>
			<FullScreenContainer id={id} secondaryBackground={secondaryBackground}>
				<MaxWidthContainer>
					<section className="title__wrapper">
						<SmallHeading>{subHeader}</SmallHeading>
						<H1>{title}</H1>
					</section>

					<section>
						{children}
					</section>
				</MaxWidthContainer>
			</FullScreenContainer>
			<style jsx>
				{`
				.title__wrapper {
					margin: 7% 5%;
				}
				`}
			</style>
		</>
	);
};

export default SectionContainer;

