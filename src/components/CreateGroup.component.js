import React, { Component } from 'react';

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
				<form
					onSubmit={this.onSubmit}
					className="form-inline my-2 my-lg-0"
				>
					<div className="form-group">
						<div className="form-group row">
							<div className="col-sm-10">
								<input
									placeholder="Enter new name of group"
									autoFocus
									type="text"
									name="title"
									className="form-control mr-sm-2"
									value={this.state.title}
									onChange={this.onChangeTitle}
								/>
							</div>
						</div>
						<div className="form-group">
							<input
								type="submit"
								value="CREATE GROUP"
								className="btn btn-outline-success my-2 my-sm-0"
							/>
						</div>
					</div>
				</form>
			</>
		)
	}
}
