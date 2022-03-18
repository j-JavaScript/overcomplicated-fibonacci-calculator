import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
	return (
		<div>
			Another page. Completely different. Completely useless. Just to test HTML5 push state routing.
			<Link to="/">Go back to the home page.</Link>
		</div>
	);
};

export default OtherPage;