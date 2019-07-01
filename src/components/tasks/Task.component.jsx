import React, { Component } from 'react';
import { Col, Row, Toast, Button, OverlayTrigger, Tooltip, ButtonGroup, Form } from 'react-bootstrap';
import styled from 'styled-components';

import RenameTask from "./RenameTask.component";
import MovingTaskContainer from "../../containers/MovingTask.container";

const TaskNameBlock = styled.div`
	display: flex;
	margin: 0;
`;

export default class Task extends Component {

	state = {
		show: true,
		showModalMoving: false,
		showModalRename: false
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
								<MovingTaskContainer
									show={showModalMoving}
									closeModalMoving={this.handleCloseModalMoving}
									_id={_id}
									title={title}
									completed={completed}
									toggleClose={toggleClose}
									deleteTask={deleteTask}
								/>
								<RenameTask
									show={showModalRename}
									closeModalRename={this.handleCloseModalRename}
									_id={_id}
									title={title}
									changeTitle={changeTitle}
								/>
							</Row>
						</Toast.Body>
					</Toast>
				</Col>
			</Row>
		)
	}
};
