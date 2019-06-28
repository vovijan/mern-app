import React from 'react';
import {Button, ButtonGroup, Modal} from "react-bootstrap";

export default class MovingTask extends React.Component {
	render() {

		const { show, closeModalMoving } = this.props;

		return (
			<>
			
				<Modal
					show={show}
					onHide={closeModalMoving}
				>
					<Modal.Header>
						<Modal.Title>Moving Task</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h3>Choose GROUP</h3>
						<div className="d-flex flex-column">
							<ButtonGroup>
								{
									this.props.data.map((item, i) => (
										<Button
											onClick={closeModalMoving}
											key={i}
											variant="outline-success"
										>
											{item.title}
										</Button>
									))
								}
							</ButtonGroup>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant="secondary"
							onClick={closeModalMoving}
						>
							Close
						</Button>
						<Button
							variant="primary"
						>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}