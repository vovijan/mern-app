import React, { Component } from 'react';
import axios from	'axios';

export default class EditTodo extends Component {

	state = {
		todo_description: '',
		todo_responsible: '',
		todo_priority: '',
		todo_completed: false
	};

	componentDidMount() {
		axios.get("http://localhost:3001/test/" + this.props.match.params.id)
			.then(response => {
				this.setState({
					todo_description: response.data.todo_description,
					todo_responsible: response.data.todo_responsible,
					todo_priority: response.data.todo_priority,
					todo_completed: response.data.todo_completed
				})
			})
			.catch(error => {
				console.log(error);
			})
	}

	onChangeTodoDescription = (e) => {
		this.setState({
			todo_description: e.target.value
		});
	};

	onChangeTodoResponsible = (e) => {
		this.setState({
			todo_responsible: e.target.value
		});
	};

	onChangeTodoPriority = (e) => {
		this.setState({
			todo_priority: e.target.value
		});
	};

	onChangeTodoCompleted = () => {
		this.setState({
			todo_completed: !this.state.todo_completed
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const obj = {
			todo_description: this.state.todo_description,
			todo_responsible: this.state.todo_responsible,
			todo_priority: this.state.todo_priority,
			todo_completed: this.state.todo_completed
		};
		console.log(obj);
		axios.post("http://localhost:3001/test/update/" + this.props.match.params.id, obj)
			.then(res => console.log(res.data));
		this.props.history.push('/');
	};

	render() {
		return (
			<>
				<div>
					<h3 style={{ textAlign: 'center' }}>Update Group</h3>
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<label>Group Name: </label>
							<input
								type="text"
								className="form-control"
								value={this.state.todo_description}
								onChange={this.onChangeTodoDescription}
							/>
						</div>
						<br />
						<div className="form-group">
							<input type="submit" value="Update Todo" className="btn btn-primary" />
						</div>
					</form>
				</div>
			</>
		)
	}
}
