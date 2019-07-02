import React, { Component } from 'react';
import {Col, Row, Toast, Button, OverlayTrigger, Tooltip, ButtonGroup, Form, Modal} from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from "react-redux";
import { changeGroup } from "../../redux/actions";

import TaskModal from "./TaskModal.component";

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
		radio: ''
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
		console.log('rename');
	};

	handleMove = () => {
		console.log(this.state.radio);
		this.props.changeGroup(this.props._idGroup, {
			title: this.state.radio,
			items: [
				...this.props.groups.items,
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

	render() {

		const completedStyle = {
			fontStyle: "italic",
			color: "#cdcdcd",
			textDecoration: "line-through"
		};

		const { title, completed, _id } = this.props.data;
		const { changeCompleted, changeTitle, deleteTask } = this.props;
		const { show, showModalMoving, showModalRename } = this.state;
		const toggleClose = () => deleteTask(_id);

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
						</Toast.Header>
						<Toast.Body>
							<Row>
								<Col md='8'>
									<OverlayTrigger
										placement="left"
										overlay={
											<Tooltip id="tooltip-left">
												Complete / Uncompleted
											</Tooltip>
										}
									>
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
											<span>{ title }</span>
										</TaskNameBlock>
									</OverlayTrigger>
								</Col>
								<ButtonGroup aria-label="Basic example">
									<OverlayTrigger
										placement="left"
										overlay={
											<Tooltip id="tooltip-left">
												Moving
											</Tooltip>
										}
									>
										<Button
											variant="outline-primary"
											onClick={this.handleShowModalMoving}
										/>
									</OverlayTrigger>
									<OverlayTrigger
										placement="right"
										overlay={
											<Tooltip id="tooltip-right">
												Rename
											</Tooltip>
										}
									>
										<Button
											variant="outline-success"
											onClick={this.handleShowModalRename}
										/>
									</OverlayTrigger>
								</ButtonGroup>

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
												this.props.groups.map((item, i) => (
													<Form.Check
														key={i}
														name='group'
														type='radio'
														label={item.title}
														value={item.title}
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
												placeholder={ title }
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
