import FullScreenContainer from '@containers/FullScreenContainer';
import MaxWidthContainer from '@containers/MaxWidthContainer';
import SmallHeading from '@elements/SmallHeading';
import H1 from '@elements/H1';

const SectionContainer = ({ children, id, secondaryBackground, title, subHeader }) => {
	return (
		<FullScreenContainer id={id} secondaryBackground={secondaryBackground}>
			<MaxWidthContainer>

				<SmallHeading>{subHeader}</SmallHeading>
				<H1>{title}</H1>

				<section>
					{children}
				</section>
			</MaxWidthContainer>
		</FullScreenContainer>
	);
};

export default SectionContainer;

