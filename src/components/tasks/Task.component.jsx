import React, { Component } from 'react';
import { Col, Row, Toast, Button, Modal, Form } from 'react-bootstrap';
import { Draggable } from "react-beautiful-dnd";
import styled from 'styled-components';

const Margnone = styled.p`
	margin: 0;
`;

export default class Task extends Component {

	state = {
		title: '',
		show: true,
		showModal: false
	};

	handleChangeName = (e) => {
		this.setState({
			title: e.target.value
		});
	};

	handleCloseModal = () => {
		this.setState({
			showModal: false
		});
	};

	handleShow = () => {
		this.setState({
			showModal: true
		});
	};

	render() {
		const completedStyle = {
			fontStyle: "italic",
			color: "#cdcdcd",
			textDecoration: "line-through"
		};
		const { title, completed, _id } = this.props.data;
		const { changeCompleted, changeTitle, deleteTask, index } = this.props;
		const { show, showModal } = this.state;
		const toggleClose = () => deleteTask(_id);
		return (
			<Row>
				<Col>
					<Draggable draggableId={_id} index={index}>
						{
							(provided, snapshot) => (
								<Toast
									show={ show }
									onClose={ toggleClose }
									{...provided.draggableProps}
									{...provided.dragHandleProps}
									ref={provided.innerRef}
									isDragging={snapshot.isDragging}
									style={{ backgroundColor: `${props => (props.isDragging ? 'lightgreen' : 'white')}` }}
								>
									<Toast.Header>
										<strong className="mr-auto">
											TASK
										</strong>
									</Toast.Header>
									<Toast.Body>
										<Row>
											<Col md='10'>
												<Margnone
													style={ completed ? completedStyle : null }
													onClick={() => {
														changeCompleted(_id)
													}}
												>
													{ title }
												</Margnone>
											</Col>
											<Button
												variant="outline-success"
												onClick={this.handleShow}
											/>
											<Modal
												show={showModal}
												onHide={this.handleClose}
											>
												<Modal.Header closeButton>
													<Modal.Title>Rename Task</Modal.Title>
												</Modal.Header>
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
												<Modal.Footer>
													<Button
														variant="secondary"
														onClick={this.handleCloseModal}
													>
														Close
													</Button>
													<Button
														variant="primary"
														onClick={() => {
															changeTitle(_id, this.state.title);
															this.setState({
																showModal: false
															});
														}}
													>
														Save Changes
													</Button>
												</Modal.Footer>
											</Modal>
										</Row>
									</Toast.Body>
								</Toast>
							)
						}
					</Draggable>
				</Col>
			</Row>
		)
	}
};
