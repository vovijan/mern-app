import React, { Component } from 'react';

import '../style.components.css';

export default class Task extends Component {

	/*state = {
		title: this.props.title,
		edit: false
	};

	toggleChange = (e) => {
		this.setState({
			title: e.target.value
		})
	};

	toggleEditTrue = () => {
		this.setState({
			edit: true
		})
	};

	toggleEditFalse = () => {
		this.setState({
			edit: false
		})
	};*/

	render() {
		return (
			<div>
				{this.props.title}
			</div>
				/*<form className="form-inline d-flex">
					<div className="form-group" onClick={this.toggleEditTrue}>
						{
							this.state.edit ?
								<input
									type="text"
									className="form-control"
									autoFocus
									onChange={this.toggleChange}
									value={this.state.title}
								/> :
								<input
									type="text"
									className="form-control"
									disabled
									value={this.state.title}
								/>
						}

					</div>
					<button
						className="btn btn-primary ml-2"
						onClick={this.toggleEditFalse}
					>
						<i className="far fa-save"></i>
					</button>
					<button
						className="btn btn-danger ml-2"
					>
						<i className="fas fa-ban"></i>
					</button>
				</form>*/
		)
	}
};
