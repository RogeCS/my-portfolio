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
						opacity: .6;
						font-weight: 500;
						font-size: 1.5rem;
					}

					@media (min-width: 800px) {
					.heading {
						font-size: 1.7rem;
						}
					}

					@media (min-width: 1000px) {
						.heading {
							font-size: 1.9rem;
						}
					}
				`}
			</style>
		</>
	);
};

export default SmallHeading;
