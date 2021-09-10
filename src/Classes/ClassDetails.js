import React, { Component } from 'react';
import Intro from '../Shared/Intro/Intro';
import MyTable from '../Shared/Table/Table';
import Loader from '../UIElements/Loader/Loader';
import axios from 'axios';
export default class ClassDetails extends Component {
	state = {
		loading: false,
		classObj: null
	};

	getClass = async () => {
		try {
			this.setState({ loading: true });
			const classId = this.props.match.params.classId;

			const res = await axios.get(`http://localhost:8000/api/v1/class/${classId}`);
			console.log('SubjectDetails -> getClass -> res', res);
			this.setState({ loading: false, classObj: res.data.class });
		} catch (error) {
			alert(error.response.data.error);
		}
	};

	removeStudentFromClass = async (studentId, studentName) => {
		const classId = this.props.match.params.classId;
		try {
			if (
				window.confirm(`Are you sure you want to remove a student with name ${studentName} from this class ?`)
			) {
				const body = { classId: classId, studentId: studentId };
				await axios.patch(`http://localhost:8000/api/v1/class/removeStudent`, body);
				this.getClass();
			}
		} catch (error) {
			alert(error.response.data.error);
		}
	};

	componentDidMount() {
		this.getClass();
	}
	render() {
		return (
			<div>
				{this.state.classObj && (
					<div>
						<Intro thisCategory={this.state.classObj.name} logo='Class' />
						<div><h2>Class Code : {this.state.classObj.code}</h2>
						<h2>Class Description : {this.state.classObj.description}</h2>
						</div>
						{this.state.classObj.realStudents.length > 0 ? (
							<div>
								<h2 style={{ textAlign: 'center' }}>Class Students</h2>
								<MyTable
									removeStudentFromClass={this.removeStudentFromClass}
									removeStudent={true}
									items={this.state.classObj.realStudents}
									heads={[ 'FullName', 'Email', 'Age', 'Gender', 'Joined-At', 'Remove' ]}
									body={[ 'email', 'age', 'gender', 'joinedAt' ]}
								/>
							</div>
						) : (
							<h1 style={{ textAlign: 'center' }}>{`${this.state.classObj
								.name} Class has no students `}</h1>
						)}
					</div>
				)}
				{this.state.loading && <Loader />}
			</div>
		);
	}
}