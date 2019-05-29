import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {

	state = {
		todo_description: '',
		todo_responsible: '',
		todo_priority: '',
		todo_completed: false
	};

	onChangeTodoDescription = (e) => {
		this.setState({
			todo_description: e.target.value
		})
	};

	onChangeTodoResponsible = (e) => {
		this.setState({
			todo_responsible: e.target.value
		})
	};

	onChangeTodoPriority = (e) => {
		this.setState({
			todo_priority: e.target.value
		})
	};

	onSubmit = (e) => {
		e.preventDefault();

		console.log(`Form submitted:`);
		console.log(`Todo Description: ${this.state.todo_description}`);
		console.log(`Todo Responsible: ${this.state.todo_responsible}`);
		console.log(`Todo Priority: ${this.state.todo_priority}`);

		const newTodo = {
			todo_description: this.state.todo_description,
			todo_responsible: this.state.todo_responsible,
			todo_priority: this.state.todo_priority,
			todo_completed: this.state.todo_completed
		};

		axios.post("http://localhost:3001/test/add", newTodo)
			.then(res => console.log(res.data));

		this.setState({
			todo_description: '',
			todo_responsible: '',
			todo_priority: '',
			todo_completed: false
		})
	};

	render() {
		return (

			<div style={{ marginTop: 10 }}>
				<h3>CREATE NEW GROUP</h3>
				<div className="card">
					<div className="card-body">
						<form onSubmit={this.onSubmit}>
							<div className="form-group">
								<div className="form-group row">
									<label className="col-sm-2 col-form-label">DESCRIPTION: </label>
									<div className="col-sm-10">
										<input
											placeholder="Enter name of group"
											type="text"
											className="form-control"
											value={this.state.todo_description}
											onChange={this.onChangeTodoDescription}
										/>
									</div>
								</div>
								<div className="form-group">
									<input
										type="submit"
										value="CREATE GROUP"
										className="btn btn-primary btn-block"
									/>
								</div>
							</div>


						</form>
					</div>
				</div>
			</div>
		)
	}
}
