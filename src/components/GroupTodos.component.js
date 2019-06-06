import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Todo = props => (
	<div className="col-sm-4 mb-4">
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">Group Name</h5>
				<p className="card-text">-{ props.todo.title }-</p>
				<Link to={`/${props.todo._id}`} className="btn btn-info mr-3">EDIT</Link>
				<button
					className="btn btn-danger"
					onClick={() => {
						props.deleteGroup(props.todo._id);
					}}
				>
					<i className="fas fa-ban"></i>
				</button>
			</div>
		</div>
	</div>
);

export default class GroupTodos extends Component {
	render() {
		return (
			<>
				<h3>GROUP LIST</h3>
				<div className="row">
					{
						this.props.data.map((item, i) => {
							return <Todo todo={item} key={i} deleteGroup={this.props.deleteGroup} />
						})
					}
				</div>
			</>
		)
	}
}
