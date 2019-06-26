import React from 'react';

import '../style.components.css';
import {Button, Form, Row} from "react-bootstrap";

export default class AddTask extends React.Component {

	state = {
		title: '',
		visible: false
	};

	toggleVisibleTrue = () => {
		this.setState({
			visible: !this.state.visible
		})
	};

	toggleVisibleFalse = (e) => {
		e.preventDefault();
		this.props.changeGroup(this.state.title);
		this.setState({
			title: ''
		});
		setTimeout(() => {
			this.setState({
				visible: false
			})
		}, 500);
	};

	handleChange = (e) => {
		this.setState({
			title: e.target.value
		})
	};

	render() {
		return (
			<>
				<Row>
					<Button
						variant="info"
						block
						className="mt-2"
						onClick={this.toggleVisibleTrue}
					>

						{
							!this.state.visible ?
								<i className="fas fa-arrow-circle-down"></i> :
								<i className="fas fa-arrow-circle-up"></i>
						}

					</Button>
				</Row>
				{
					this.state.visible ?
						<Row className="input-rel">
							<Form.Control
								type="text"
								value={this.state.title}
								onChange={this.handleChange}
								className="col-md-9 mt-2"
								placeholder="Enter task name"
							/>
							<Button
								variant="success"
								className="col-md-3 mt-2 button-abs"
								onClick={this.toggleVisibleFalse}
							>
								<i className="fas fa-thumbtack"></i>
							</Button>
						</Row> : null
				}
			</>
		)
	}

}