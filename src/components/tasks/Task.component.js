import React, { Component } from 'react';

import '../style.components.css';

export default class Task extends Component {

	state = {
		title: this.props.title,
		edit: false
	};

	toggleEditTrue = () => {
		this.setState({
			edit: true
		})
	};

	render() {
		return (
			<>
				<form className="form-inline d-flex">
					<div className="form-group" onClick={this.toggleEditTrue}>
						{
							this.state.edit ?
								<input
									type="text"
									className="form-control"
									autoFocus
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
						type="submit"
						className="btn btn-primary ml-2"
					>
						<i className="far fa-save"></i>
					</button>
					<button
						type="submit"
						className="btn btn-danger ml-2"
					>
						<i className="fas fa-ban"></i>
					</button>
				</form>
			</>
		)
	}
};
