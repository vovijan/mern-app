import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

export default class RenameTask extends React.Component {

	state = {
		title: ''
	};

	handleChangeName = (e) => {
		this.setState({
			title: e.target.value
		});
	};

	render() {

		const { _id, title, changeTitle, closeModalRename, show } = this.props;

		return (
			<>
				<Modal
					show={show}
					onHide={closeModalRename}
				>
					<Modal.Header>
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
							onClick={closeModalRename}
						>
							Close
						</Button>
						<Button
							variant="primary"
							onClick={() => {
								changeTitle(_id, this.state.title);
								closeModalRename();
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