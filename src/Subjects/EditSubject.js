import React, { Fragment, Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Intro from '../Shared/Intro/Intro';
import axios from 'axios';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Loader from '../UIElements/Loader/Loader';

export default class EditSubject extends Component {
	state = {
		name: '',
		code: '',
		description: '',
		loading: false,
		doneObj: null
	};

	getSubject = async e => {
		const subjectId = this.props.match.params.subjectId;
		console.log('EditSubject -> subjectId', subjectId, typeof subjectId);

		this.setState({ loading: true });
		try {
            const res = await axios.get(`http://localhost:8000/api/v1/subject/${subjectId}`);
            const sbjt = res.data.subject
			this.setState({ 
                name: sbjt.name,
				code: sbjt.code,
				description: sbjt.description,
                loading: false });
		} catch (error) {
			console.log(error);
			this.setState({ loading: false });
		}
	};

	writeHandler = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	editSubjectHandler = async e => {
		e.preventDefault();
		this.setState({ loading: true });
		try {
            const { name, code, description } = this.state;
			const body = {
				name: name,
				code: code,
				description: description,
                subjectId: this.props.match.params.subjectId
            };
            console.log(body)
			const addingResult = await axios.patch('http://localhost:8000/api/v1/subjects/edit', body);
			let doneObj = { message: addingResult.data.message, type: 'success' };

			this.setState({ loading: false, doneObj: doneObj });
		} catch (error) {
			console.log(error.response.data.error);
			let doneObj = { message: error.response.data.error, type: 'error' };
			this.setState({ loading: false, doneObj: doneObj });
		}
	};

	componentDidMount() {
		this.getSubject();
	}
	render() {
		return (
			<Fragment>
				<Intro logo='School' thisCategory={`Edit ${this.state.name} Subject `}/>
				<form onSubmit={this.editSubjectHandler}>
					<div className='editForm'>
						<TextField
							id='outlined-basic'
							label='Subject Code'
							variant='outlined'
							name='code'
							onChange={this.writeHandler}
							value={this.state.code}
							style={{ width: '100%' }}
							required
						/>
                    </div> 
                    <br/>   
                    <div className='inps'>
						<TextField
							id='outlined-basic'
							label='Subject Description'
							variant='outlined'
							name='description'
							onChange={this.writeHandler}
							value={this.state.description}
							style={{ width: '100%' }}
							required
						/>    
						<br />
						<br />
						<Button variant='contained' color='primary' type='submit'>
							Submit
						</Button>
						{this.state.loading && <Loader />}
						<br />
						<br />
						{this.state.doneObj && (
							<Alert message={this.state.doneObj.message} type={this.state.doneObj.type} />
						)}
					</div>
				</form>
			</Fragment>
		);
	}
}
