import { Fragment } from "react";

const Section = ({title, children }) => {
	return (
		<Fragment>
			<h2>{title}</h2>
			{children}
		</Fragment>
	)
}

export { Section };