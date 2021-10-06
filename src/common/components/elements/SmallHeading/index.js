const SmallHeading = ({ children }) => {
	return (
		<>
			<h2 className="heading">
				{children}
			</h2>
			<style jsx>
				{`
					.heading {
						margin: 0;
						font-weight: 500;
						font-size: 1.5rem;
						color: var(--gray);
					}

					@media (min-width: 800px) {
					.heading {
						font-size: 1.8rem;
						}
					}

					@media (min-width: 1000px) {
						.heading {
							font-size: 2.5rem;
						}
					}
				`}
			</style>
		</>
	);
};

export default SmallHeading;
