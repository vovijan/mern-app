import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.components.css';

export default class EditGroup extends Component {

	state = {
		title: this.props.group.title,
		items: this.props.group.items
	};

	onChangeTodoDescription = (e) => {
		this.setState({
			title: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.changeGroupName(this.props.group._id, this.state.title);
	};

	render() {
		return (
			<>
				<nav className="navbar navbar-dark bg-dark">
					<div className="navbar-brand">MERN-Stack App</div>
					<form
						className="form-inline my-2 my-lg-0"
					>
						<div className="form-group">
							<div className="form-group row">
								<div className="col-sm-10">
									<input
										placeholder="Enter new name of TASK"
										autoFocus
										type="text"
										name="title"
										className="form-control mr-sm-2"
									/>
								</div>
							</div>
							<div className="form-group">
								<input
									type="submit"
									value="CREATE TASK"
									className="btn btn-outline-success my-2 my-sm-0"
								/>
							</div>
						</div>
					</form>
				</nav>

				<div className="column-center">
					<div className="card col-sm-6 text-center">
						<div className="card-body">
							<h5 className="card-title">UPDATE GROUP</h5>
							<form onSubmit={this.onSubmit}>
								<div className="form-group">
									<label>Group Name: </label>
									<input
										type="text"
										className="form-control text-center"
										value={this.state.title}
										onChange={this.onChangeTodoDescription}
									/>
								</div>
								<div className="form-group">
									<input type="submit" value="UPDATE" className="btn btn-primary" />
									<Link to="/">
										<button className="btn btn-outline-dark">Back</button>
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</>
		)
	}
}
