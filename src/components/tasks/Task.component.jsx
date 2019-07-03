import React, { Component } from 'react';
import { Col, Row, Toast, ButtonGroup, Form, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from "react-redux";
import { changeGroup } from "../../redux/actions";

import TaskModal from "./TaskModal.component";
import TaskButtonGroup from './TaskButtonGroup.component';

const TaskNameBlock = styled.div`
	display: flex;
	margin: 0;
`;

const mapStateToProps = state => ({
	groups: state.data
});

const mapDispatchToProps = dispatch => ({
	changeGroup: (id, data) => {
		dispatch(changeGroup({ id, data }));
	}
});

class Task extends Component {

	state = {
		show: true,
		showModalMoving: false,
		showModalRename: false,
		radio: '',
		title: this.props.data.title
	};

	handleCloseModalMoving = () => {
		this.setState({
			showModalMoving: false
		});
	};

	handleShowModalMoving = () => {
		this.setState({
			showModalMoving: true
		});
	};

	handleCloseModalRename = () => {
		this.setState({
			showModalRename: false
		});
	};

	handleShowModalRename = () => {
		this.setState({
			showModalRename: true
		});
	};

	handleRename = () => {
		this.props.changeTitle(this.props.data._id, this.state.title);
		this.handleCloseModalRename();
	};

	handleMove = () => {
		const resultGroup = this.props.groups.find(group => group._id === this.state.radio);
		this.props.changeGroup(resultGroup._id, {
			title: resultGroup.title,
			items: [
				...resultGroup.items,
				{
					_id: Date.now(),
					title: this.props.data.title,
					completed: this.props.data.completed
				}
			]
		});
		this.props.deleteTask(this.props.data._id);
	};

	handleChange = e => {
		this.setState({
			radio: e.target.value
		})
	};

	handleChangeName = e => {
		this.setState({
			title: e.target.value
		})
	};

	render() {

		const completedStyle = {
			fontStyle: "italic",
			color: "#cdcdcd",
			textDecoration: "line-through"
		};

		const { title, completed, _id } = this.props.data;
		const { changeCompleted, deleteTask, idGroup } = this.props;
		const { show, showModalMoving, showModalRename } = this.state;
		const toggleClose = () => deleteTask(_id);

		const filterGroup = this.props.groups.filter(item => item._id !== idGroup);

		return (
			<Row>
				<Col>
					<Toast
						show={ show }
						onClose={ toggleClose }
					>
						<Toast.Header>
							<strong className="mr-auto">
								TASK
							</strong>
							<ButtonGroup aria-label="Basic example">
								<TaskButtonGroup
									placement="left"
									title="Moving"
									onClick={this.handleShowModalMoving}
									variant="primary"
								/>
								<TaskButtonGroup
									placement="right"
									title="Rename"
									onClick={this.handleShowModalRename}
									variant="success"
								/>
							</ButtonGroup>
						</Toast.Header>
						<Toast.Body>
							<Row>
								<Col md='12'>
									<TaskNameBlock
										style={ completed ? completedStyle : null }
									>
										<Form.Check
											type="checkbox"
											checked={ completed }
											onChange={() => {
												changeCompleted(_id)
											}}
										/>
										<p style={{ margin: 0, width: '95%' }}>{ title }</p>
									</TaskNameBlock>
								</Col>

								<TaskModal
									show={showModalMoving}
									modalTitle="Moving Task"
									saveCallback={this.handleMove}
									closeCallback={this.handleCloseModalMoving}
								>
									<Modal.Body>
										<h3>Choose GROUP</h3>
										<div className="d-flex flex-column">
											{
												filterGroup.map((item, i) => (
													<Form.Check
														key={i}
														name='group'
														type='radio'
														label={item.title}
														value={item._id}
														onChange={this.handleChange}
													/>
												))
											}
										</div>
									</Modal.Body>
								</TaskModal>

								<TaskModal
									show={showModalRename}
									modalTitle="Rename Task"
									saveCallback={this.handleRename}
									closeCallback={this.handleCloseModalRename}
								>
									<Modal.Body>
										<Form>
											<Form.Control
												type="text"
												value={this.state.title}
												onChange={this.handleChangeName}
											/>
										</Form>
									</Modal.Body>
								</TaskModal>

							</Row>
						</Toast.Body>
					</Toast>
				</Col>
			</Row>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Task);
