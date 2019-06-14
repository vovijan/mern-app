import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.component';
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
		console.log(this.props.group._id, this.props.group);
		this.props.changeGroup(this.props.group._id, this.state);
		document.querySelector('.alert').style.display = 'block';
		setTimeout(() => {
			document.querySelector('.alert').style.display = 'none';
		}, 3000);
	};

	addTask = (title) => {
		//console.log(this.props.group._id, {title, items: this.props.group.items});
		this.props.changeGroup(this.props.group._id, {
			items: this.props.group.items.map(item => {
				return item.title = title;
			})
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
									<div className="alert">You message has been sent!</div>
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
