import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Todo = props => {
	console.log(props.todo.title);
	return (
	<div className="col-sm-4 mb-4">
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">Group Name</h5>
				<p className="card-text">-{ props.todo.title }-</p>
				<Link to={`/edit/${props.todo._id}`} className="btn btn-info btn-block">EDIT</Link>
			</div>
		</div>
	</div>
)};

export default class GroupTodos extends Component {
	render() {
		return (
			<>
				<h3>GROUP LIST</h3>
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
