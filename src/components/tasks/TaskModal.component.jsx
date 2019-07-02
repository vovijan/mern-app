import React from 'react'
import { Button, Modal } from "react-bootstrap";

const TaskModalHeader = ({ title }) => (
	<Modal.Header>
		<Modal.Title>{ title }</Modal.Title>
	</Modal.Header>
);

const TaskModalButtons = ({ closeCallback, saveCallback }) => (
	<Modal.Footer>
		<Button
			variant="secondary"
			onClick={closeCallback}
		>
			Close
		</Button>
		<Button
			variant="primary"
			onClick={saveCallback}
		>
			Save Changes
		</Button>
	</Modal.Footer>
);

const TaskModal = ({ modalTitle, show, closeCallback, saveCallback, children }) => (
	<Modal
		show={show}
		onHide={closeCallback}
	>
		<TaskModalHeader
			title={modalTitle}
		/>
		{children}
		<TaskModalButtons
			closeCallback={closeCallback}
			saveCallback={saveCallback}
		/>
	</Modal>
);

export default TaskModal;