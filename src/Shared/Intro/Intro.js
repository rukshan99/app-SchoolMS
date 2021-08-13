import React, { Fragment } from 'react';

import { People, Class, Person, School } from '@material-ui/icons';
import './Intro.scss';

const Intro = (props) => {
	const logo = props.logo;
	return (
		<Fragment>
			<div style={{ display: 'flex' }} className='Header'>
				<div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
					{logo === 'School' ? (
						<School />
					) : logo === 'Class' ? (
						<Class />
					) : logo === 'Person' ? (
						<Person />
					) : (
						<People />
					)}
				</div>
				<h2>{props.thisCategory}</h2>
			</div>
			<hr />
		</Fragment>
	);
}

export default Intro;
