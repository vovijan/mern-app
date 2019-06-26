import React  from 'react';

import '../style.components.css';
import TasksList from "../tasks/TasksList.component";
import AddTask from "../tasks/AddTask.component";

export default class Group extends React.Component {

	state = {
		title: this.props.data.title,
		items: this.props.data.items,
		edit: false,
		check: false
	};

	toggleEditTrue = () => {
		this.setState({
			edit: true,
			check: true
		})
	};

	toggleEditFalse = (e) => {
		e.preventDefault();
		this.props.changeGroup(this.props.data._id, {
			title: this.state.title,
			items: this.props.data.items
		});
		setTimeout(() => {
			this.setState({
				edit: false
			})
		}, 1500);
		setTimeout(() => {
			this.setState({
				check: false
			})
		}, 500);

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

	changeTaskTitle = (id, title) => {
		this.props.changeGroup(this.props.data._id, {
			title: this.props.data.title,
			items: this.props.data.items.map(item => {
				if (item._id === id) {
					item.title = title
				}
				return item;
			})
		})
	};

	deleteTask = (id) => {
		this.props.changeGroup(this.props.data._id, {
			title: this.props.data.title,
			items: this.props.data.items.filter(item => item._id !== id)
		})
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
									className="btn btn-success col mr-2"
									onClick={this.toggleEditFalse}
								>
									{
										!this.state.check ?
											<i className="fas fa-check"></i> :
											<i className="far fa-save"></i>
									}

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
						changeTitle={this.changeTaskTitle}
						deleteTask={this.deleteTask}
					/>

				</div>
			</div>
		)
	}
};