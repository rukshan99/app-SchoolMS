import React, { Component, Fragment } from 'react';

import axios from 'axios';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MainAlert from '../UIElements/Alert/Alert';
import Loader from '../UIElements/Loader/Loader';
import Intro from '../Shared/Intro/Intro';

import './AddClass.scss';

class AddStudent extends Component {
	state = {
		name: '',
		code: '',
		description: '',
		loading: false,
		doneObj: null
	};

	writeHandler = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	addClassHandler = async e => {
		e.preventDefault();
		this.setState({ loading: true });
		try {
			const { name, code, description } = this.state;
			const body = {
				name: name,
				code: code,
				description: description
			};
			const addingResult = await axios.post('http://localhost:8000/api/v1/classes', body);
			console.log('AddSubject -> addingResult', addingResult);
			let doneObj = { message: addingResult.data.message, type: 'success' };

			this.setState({ loading: false, doneObj: doneObj });
		} catch (error) {
			console.log(error.response.data.error);
			let doneObj = { message: error.response.data.error, type: 'error' };
			this.setState({ loading: false, doneObj: doneObj });
		}
	};
	render() {
		return (
			<Fragment>
				<Intro logo='Class' thisCategory='Add Class' />
				<form onSubmit={this.addClassHandler}>
					<div className='addForm'>
					<div className='inps'>
						<TextField
							id='outlined-basic'
							label='Class Name'
							variant='outlined'
							name='name'
							onChange={this.writeHandler}
							style={{ width: '100%' }}
							required
						/>
						</div>
						<div className='inps'>
						<TextField
							id='outlined-basic'
							label='Class Code'
							variant='outlined'
							name='code'
							onChange={this.writeHandler}
							style={{ width: '100%' }}
							required
						/>
						</div>
						<div className='inps'>
						<TextField
							id='outlined-basic'
							label='Class Description'
							variant='outlined'
							name='description'
							onChange={this.writeHandler}
							style={{ width: '100%' }}
							required
						/>
						</div>
						<br />
						<br />
						<Button variant='contained' color='primary' type='submit'>
							Submit
						</Button>
						{this.state.loading && <Loader />}
						<br />
						<br />
						{this.state.doneObj && (
							<MainAlert message={this.state.doneObj.message} type={this.state.doneObj.type} />
						)}
					</div>
				</form>
			</Fragment>
		);
	}
}

export default AddStudent;
