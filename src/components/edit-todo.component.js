import React, { Component } from 'react';
import axios from	'axios';

export default class EditTodo extends Component {

	state = {
		title: ''
	};

	componentDidMount() {
		axios.get("http://localhost:3001/test/" + this.props.match.params.id)
			.then(response => {
				this.setState({
					title: response.data.title
				})
			})
			.catch(error => {
				console.log(error);
			})
	}

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
					<h5 className="card-title">Update Group</h5>
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
							<input type="submit" value="Update Todo" className="btn btn-primary" />
						</div>
					</form>
				</div>
			</div>
		)
	}
}
