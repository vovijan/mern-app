import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Todo = props => (
	<div className="list-group list-group-horizontal col-md-4">
		<Link className="list-group-item list-group-item-action" to={`/edit/${props.todo._id}`}>{ props.todo.title }</Link>
	</div>
);

export default class GroupTodos extends Component {
	render() {
		return (
			<>
				<h3>Group List</h3>
				<div className="row">
					{
						this.props.data.map((item, i) => {
							return <Todo todo={item} key={i} />
						})
					}
				</div>
			</>
		)
	}
}
