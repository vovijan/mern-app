import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Todo = props => (
	<tr>
		<td className={props.todo.todo_completed ? 'completed' : ''}>{ props.todo.todo_description }</td>
		<td>
			<Link to={`/edit/${props.todo._id}`}>Edit</Link>
		</td>
	</tr>
);

export default class GroupTodos extends Component {
	render() {
		return (
			<>
				<h3>Group List</h3>
				<table className="table table-striped" style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>Group Name</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.data.state.map((item, i) => {
								return <Todo todo={item} key={i} />
							})
						}
					</tbody>
				</table>
			</>
		)
	}
}
