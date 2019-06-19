import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar.component';
import TasksList from '../tasks/TasksList.component';

import '../style.components.css';

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

	handleClick = (e) => {
		e.preventDefault();
		this.props.changeGroup(this.props.group._id, this.state);
		document.querySelector('.alert').style.display = 'block';
		setTimeout(() => {
			document.querySelector('.alert').style.display = 'none';
		}, 500);
	};

	addTask = (title) => {
		this.props.changeGroup(this.props.group._id, {
			title: this.props.group.title,
			items: [
				...this.props.group.items,
				{
					_id: Date.now(),
					title,
					completed: false
				}
			]
		});
	};

	render() {
		return (
			<>
				<NavBar
					placeholder="Enter new name of TASK"
					value="CREATE TASK"
					addData={this.addTask}
				/>

				<div className="column-center mb-3">
					<div className="card col-sm-6 text-center">
						<div className="card-body">
							<h5 className="card-title">UPDATE GROUP</h5>
							<form>
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
									<input
										type="button"
										onClick={this.handleClick}
										value="UPDATE"
										className="btn btn-primary"
									/>
									<Link to="/">
										<button className="btn btn-outline-dark">Back</button>
									</Link>
									<div className="alert">Name of Group is Update!</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div className="column-center">
					<TasksList data={this.props.group} />
				</div>
			</>
		)
	}
}
