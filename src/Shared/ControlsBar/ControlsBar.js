import React from 'react';

import { Search, AddCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Button from '@material-ui/core/Button';
import './ControlsBar.scss';


const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

/*
Required Props:

	thisCategory
	goToAdd
	adding
*/
const ControlsBar = (props) => {
	const classes = useStyles();

	return (
		<div className='bar'>
			<div>
				<TextField
					id='searchInput'
					label={`Search For ${props.thisCategory}`}
					name='searchText'
					onChange={props.searching}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<Search className='search' onClick={props.search} />
							</InputAdornment>
						)
					}}
				/>
			</div>
			<div>
				<Button
					variant="contained"
					color="secondary"
					className={classes.button}
					startIcon={<AssessmentIcon />}
					href={props.reportURL}
				>
					Generate Report
      			</Button>

				{props.adding && (
					<IconButton aria-label='delete' size='small' onClick={props.goToAdd}>
						<AddCircle color='primary' className='add' fontSize='large' />
					</IconButton>
				)}
			</div>
		</div>
	);
}

export default ControlsBar;
