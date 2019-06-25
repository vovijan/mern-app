import React  from 'react';

import '../style.components.css';
import TasksList from "../tasks/TasksList.component";

class Group extends React.Component {

	state = {
		title: this.props.data.title,
		items: this.props.data.items,
		edit: false
	};

	toggleEditTrue = () => {
		this.setState({
			edit: true
		})
	};

	toggleEditFalse = (e) => {
		e.preventDefault();
		this.props.changeGroup(this.props.data._id, {
			title: this.state.title,
			items: this.props.data.items
		});
		document.querySelector('.alert').style.display = 'block';
		setTimeout(() => {
			document.querySelector('.alert').style.display = 'none';
		}, 500);
		this.setState({
			edit: false
		})
	};

	changeGroupName = (e) => {
		this.setState({
			title: e.target.value
		})
	};

	handleClick = (e) => {
		e.preventDefault();
		this.props.changeGroup(this.props.data._id, {
			title: this.state.title,
			items: this.props.data.items
		});
		document.querySelector('.alert').style.display = 'block';
		setTimeout(() => {
			document.querySelector('.alert').style.display = 'none';
		}, 500);
	};

	render() {
		return (
			<div className="card" style={{ border: 'none' }}>
				<div className="card-body">
					<div className="row"
						onClick={this.toggleEditTrue}
					>

						{
							this.state.edit ?
								<input
									type="text"
									value={ this.state.title }
									className="form-control mb-2 input-rel"
									onChange={this.changeGroupName}
								/> :
								<input
									type="text"
									value={ this.props.data.title }
									className="form-control mb-2 input-rel"
									disabled
								/>
						}

					</div>
					<div className="row">

						{
							this.state.edit ?
								<button
									className="btn btn-primary col mr-2"
									onClick={this.toggleEditFalse}
								>
									<i className="fas fa-check"></i>
								</button> : null
						}

						<button
							className="btn btn-danger col"
							onClick={() => {
								this.props.deleteGroup(this.props.data._id);
							}}
						>
							<i className="fas fa-ban"></i>
						</button>
					</div>

					<div className="alert">Name of Group is Update!</div>

					<div className="row">
						<button
							type="button"
							className="btn btn-light col mt-2"
						>
							<i className="fas fa-plus"></i>
						</button>
					</div>

					<TasksList data={this.props.data} />

				</div>
			</div>
		)
	}
}

export default Group;