import React from 'react';

import Alert from '@material-ui/lab/Alert';

const MainAlert = (props) => {
	return (
		<div>
			<Alert severity={props.type}>{props.message}</Alert>
		</div>
	);
}

export default MainAlert;
