import React, { Component } from 'react';

import ControlsBar from '../Shared/ControlsBar/ControlsBar';
import Intro from '../Shared/Intro/Intro';

class Teachers extends Component {
	state = {
		loading: false,
		teachers: null,
	};

	goToAdd = () => {
		this.props.history.push('/Teachers/Add');
	};

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
				
			</div>
		);
	}
}

export default Teachers;