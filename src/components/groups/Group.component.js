import React  from 'react';

import '../style.components.css';
import TasksList from "../tasks/TasksList.component";
import AddTask from "../tasks/AddTask.component";

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
		}, 1500);
		this.setState({
			edit: false
		})
	};

	changeGroupName = (e) => {
		this.setState({
			title: e.target.value
		})
	};

	addTask = (title) => {
		this.props.changeGroup(this.props.data._id, {
			title: this.props.data.title,
			items: [
				...this.props.data.items,
				{
					_id: Date.now(),
					title,
					completed: false
				}
			]
		});
	};

	changeTaskCompleted = (id) => {
		this.props.changeGroup(this.props.data._id, {
			title: this.props.data.title,
			items: this.props.data.items.map(item => {
				if (item._id === id) {
					item.completed = !item.completed
				}
				return item;
			})
		})
	};

	render() {
		return (
			<div className="card" style={{ border: 'none' }}>
				<div className="card-body">
					<div className="row"
						onClick={this.toggleEditTrue}
					>
						<div className="alert">
							Update Group Name is Complete!
						</div>
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

					<AddTask changeGroup={this.addTask} />

					<TasksList
						data={this.props.data}
						changeCompleted={this.changeTaskCompleted}
					/>

				</div>
			</div>
		)
	}
}

export default Group;