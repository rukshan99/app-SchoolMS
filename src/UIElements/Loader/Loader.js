import React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import './Loader.scss';

const Loader = () => {
	return (
		<div id='Loader'>
			<LinearProgress className='AppProgressBar' />
		</div>
	);
}

export default Loader;