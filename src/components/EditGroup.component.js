import React, { Component } from 'react';
import axios from	'axios';
import { Link } from 'react-router-dom';

export default class EditGroup extends Component {

	state = {
		title: ''
	};

	onChangeTodoDescription = (e) => {
		this.setState({
			title: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const obj = {
			title: this.state.title
		};
		console.log(obj);
		axios.post("http://localhost:3001/test/update/" + this.props.match.params.id, obj)
			.then(res => console.log(res.data));
		this.props.history.push('/');
	};

	render() {
		return (
			<div className="card col-sm-12 text-center">
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
		)
	}
}
