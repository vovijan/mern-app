import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateGroup extends Component {

	state = {
		title: ''
	};

	onChangeTitle = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.title.trim()) this.props.addGroup(this.state.title);
		this.setState({
			title: ''
		});
	};

	render() {
		return (
			<>
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
											name="title"
											className="form-control"
											value={this.state.title}
											onChange={this.onChangeTitle}
										/>
									</div>
								</div>
								<div className="form-group">
                  {/*<Link to="/">*/}
										<input
											type="submit"
											value="CREATE GROUP"
											className="btn btn-primary btn-block"
										/>
                  {/*</Link>*/}
									<Link to="/">
										<button className="btn btn-primary">Back</button>
									</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</>
		)
	}
}
