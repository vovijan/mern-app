import React from 'react';
import {Button, ButtonGroup, Form, Modal} from "react-bootstrap";

export default class TaskModal extends React.Component {

	state = {
		title: ''
	};

	handleChangeName = (e) => {
		this.setState({
			title: e.target.value
		});
	};

	render() {

		const { _id, title, modalTitle, changeTitle, closeModal, show } = this.props;

		return (
			<>
				<Modal
					show={show}
					onHide={closeModal}
				>
					<Modal.Header>
						<Modal.Title>{ modalTitle }</Modal.Title>
					</Modal.Header>
					<Modal.Body>

						{/*<Form>
							<Form.Control
								type="text"
								placeholder={ title }
								value={this.state.title}
								onChange={this.handleChangeName}
							/>
						</Form>*/}

						{/*<h3>Choose GROUP</h3>
						<div className="d-flex flex-column">
							<ButtonGroup>
								{
									this.props.data.map((item, i) => (
										<Button
											onClick={() => {
												closeModalMoving();
												deleteTask(_id);
												changeGroup(item._id, {
													title: item.title,
													items: [
														...item.items,
														{
															_id: Date.now(),
															title: title,
															completed: completed
														}
													]
												});
											}}
											key={i}
											variant="outline-success"
										>
											{item.title}
										</Button>
									))
								}
							</ButtonGroup>
						</div>*/}

					</Modal.Body>
					<Modal.Footer>
						<Button
							variant="secondary"
							onClick={closeModal}
						>
							Close
						</Button>
						<Button
							variant="primary"
							onClick={() => {
								changeTitle(_id, this.state.title);
								closeModal();
							}}
						>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}