import React, { Component } from 'react';
import {Col, Row, Toast, Button, Modal, Form} from 'react-bootstrap';

import '../style.components.css';

export default class Task extends Component {

	state = {
		show: true,
		showModal: false
	};

	handleClose = () => {
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
		const { changeCompleted } = this.props;
		const { show, showModal } = this.state;
		const toggleShow = () => this.setState({ show: !show });
		return (
			<Row>
				<Col>
					<Toast
						show={ show }
						onClose={ toggleShow }
					>
						<Toast.Header>
							<strong className="mr-auto">
								TASK
							</strong>
						</Toast.Header>
						<Toast.Body>
							<Row>
								<Col md='10'>
									<p
										className="marg-none"
										style={ completed ? completedStyle : null }
										onClick={() => {
											changeCompleted(_id)
										}}
									>
										{ title }
									</p>
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
												AutoFocus
											/>
										</Form>
									</Modal.Body>
									<Modal.Footer>
										<Button
											variant="secondary"
											onClick={this.handleClose}
										>
											Close
										</Button>
										<Button
											variant="primary"
											onClick={this.handleClose}
										>
											Save Changes
										</Button>
									</Modal.Footer>
								</Modal>
							</Row>
						</Toast.Body>
					</Toast>
				</Col>
			</Row>
		)
	}
};
