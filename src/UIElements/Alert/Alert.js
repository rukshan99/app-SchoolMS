import React from 'react';

import Alert from '@material-ui/lab/Alert';

const myAlert = (props) => {
	return (
		<div>
			<Alert severity={props.type}>{props.message}</Alert>
		</div>
	);
}

export default myAlert;
