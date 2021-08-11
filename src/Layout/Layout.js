import React from 'react';

import Navbar from '../UIElements/navbar';

function Layout(props) {
	return (
		<div>
			<Navbar>{props.children}</Navbar>
		</div>
	);
}
export default Layout;
