import React, { Component, Fragment } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import Intro from '../Shared/Intro/Intro';
import MainAlert from '../UIElements/Alert/Alert';
import Loader from '../UIElements/Loader/Loader';
import './AddClass.scss';

export default class EditClass extends Component {
	state = {
		name: '',
		code: '',
		description: '',
		loading: false,
		doneObj: null
	};

	getClass = async () => {
		this.setState({ loading: true });
		const classId = this.props.match.params.classId;
		try {
			const res = await axios.get(`http://localhost:8000/api/v1/class/${classId}`);
            const clas = res.data.class;
			this.setState({
				name: clas.name,
				code: clas.code,
				description: clas.description,
				loading: false
			});
			// this.setState({ loading: false, name: res.data.class.name });
		} catch (error) {
			this.setState({ loading: false });

			alert(error.response.data.error);
		}
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
				description: description,
                classId: this.props.match.params.classId
			};
            console.log(body)
			const addingResult = await axios.patch('http://localhost:8000/api/v1/class/edit', body);
			console.log('AddSubject -> addingResult', addingResult);
			let doneObj = { message: addingResult.data.message, type: 'success' };

			this.setState({ loading: false, doneObj: doneObj });
		} catch (error) {
			console.log(error.response.data.error);
			let doneObj = { message: error.response.data.error, type: 'error' };
			this.setState({ loading: false, doneObj: doneObj });
		}
	};
	componentDidMount() {
		this.getClass();
	}
	render() {
		return (
			<Fragment>
				{!this.state.loading && (
					<div>
						<Intro logo='Class' thisCategory={`Edit Class ${this.state.name}`} />
						<form onSubmit={this.addClassHandler}>
							<div className='addForm'>
                            {/* <div className='inps'>
						        <TextField
							        id='outlined-basic'
							        label='Class Name'
							        variant='outlined'
							        name='name'
                                    value={this.state.name}
							        style={{ width: '100%' }}
							        required
						        />
						    </div> */}
                            <div className='inps'>
						        <TextField
							        id='outlined-basic'
							        label='Class Code'
							        variant='outlined'
							        name='code'
                                    value={this.state.code}
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
                                    value={this.state.description}
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
							</div>
						</form>{' '}
					</div>
				)}
				<br />
				<br />
				{this.state.loading && <Loader />}
				{this.state.doneObj && <MainAlert message={this.state.doneObj.message} type={this.state.doneObj.type} />}
			</Fragment>
		);
	}
}
