import React, { Component } from 'react';

import '../style.components.css';

export default class Task extends Component {
	render() {
		return (
			<>
				<form className="form-inline d-flex">
					<div className="form-group">
						<input
							type="text"
							disabled
							className="form-control"
							value={this.props.title}
						/>
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
