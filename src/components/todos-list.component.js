import React, { Component } from 'react';
import axios from 'axios';

export default class TodoList extends Component {

	state = {
		data: []
	};

	componentDidMount() {
		axios.get("http://localhost:3001/test")
			.then(response => {
				this.setState({data: response.data});
			})
			.catch(error => {
				console.log(error);
			})
	};

	render() {
		return (
			<>
				<h3>Todos List</h3>
				<table className="table table-striped" style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>Description</th>
							<th>Responsible</th>
							<th>Priority</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
					{ this.todoList() }
					</tbody>
				</table>
			</>
		)
	}
}
