import React from 'react';

export default class NavBar extends React.Component {

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
		this.props.value === 'CREATE GROUP' ? 
			this.props.addGroup(this.state.title) :
			this.props.addNewTask(this.props._id, this.state.title);
		//if (this.state.title.trim()) this.props.addGroup(this.state.title);
		this.setState({
			title: ''
		});
	};

	render() {
		return (
			<nav className="navbar navbar-dark bg-dark mb-5">
				<div className="navbar-brand">MERN-Stack App</div>
				<form
					onSubmit={this.onSubmit}
					className="form-inline my-2 my-lg-0"
				>
					<div className="form-group">
						<div className="form-group row">
							<div className="col-sm-10">
								<input
									placeholder={this.props.placeholder}
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
								value={this.props.value}
								className="btn btn-outline-success my-2 my-sm-0"
							/>
						</div>
					</div>
				</form>
			</nav>
		)
	}
}
