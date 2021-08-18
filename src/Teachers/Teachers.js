import React, { Component } from 'react';

import ControlsBar from '../Shared/ControlsBar/ControlsBar';
import Intro from '../Shared/Intro/Intro';
import Loader  from '../UIElements/Loader/Loader';
import MainTable from '../Shared/Table/Table';

class Teachers extends Component {
	state = {
		loading: false,
		teachers: null,
		searchText: ''
	};

	getTeachers = async () => {
		try {
			this.setState({ loading: true });
			// const res = await axios.get('settings/teachers');
			const res = { data: { teachers: []}}
			// this.setState({ loading: false, teachers: res.data.teachers });
			this.setState({ loading: false, teachers: res.data.teachers });
		} catch (error) {
			console.log(error);
			this.setState({ loading: false });

			alert('Error 500, Some Thing Went Wrong, please try again later');
		}
	};

	goToAdd = () => {
		this.props.history.push('/Teachers/Add');
	};

	goToDetails = teacherId => {
		this.props.history.push(`/Teachers/Details/${teacherId}`);
	};

	searching = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	// search = async () => {
	// 	if (this.state.searchText === '') return alert('Please insert something');
	// 	this.setState({ loading: true });
	// 	try {
	// 		const response = { data: { teachers: []}}
	// 		// const res = await axios.get(`settings/teachers/search/${this.state.searchText}`);
	// 		console.log('search -> res', response);
	// 		this.setState({ loading: false });
	// 		if (res.data.teachers.length < 1) {
	// 			return alert('Teachers Not Found!');
	// 		}
	// 		this.setState({ teachers: res.data.teachers });
	// 	} catch (error) {
	// 		alert(error.response.data.error);
	// 	}
	// };


	componentDidMount() {
		this.getTeachers();
	}

	render() {
		return (
			<div>
				<Intro thisCategory='Teachers' logo='Person' />
				<ControlsBar
					// search={this.search}
					// searching={this.searching}
					thisCategory='Teachers'
					adding={true}
					goToAdd={this.goToAdd}
				/>
				{this.state.teachers && (
					<MainTable
						view={true}
						options={true}
						heads={[ 'FullName', 'Email', 'Age', 'Gender', 'Salary', 'Joined-At' ]}
						body={[ 'email', 'age', 'gender', 'salary', 'joinedAt' ]}
						items={this.state.teachers}
						deleteItem={this.deleteTeacher}
						goToEdit={this.goToEdit}
						goToDetails={this.goToDetails}
					/>
				)}
				{this.state.loading && <Loader />}
				
			</div>
		);
	}
}

export default Teachers;