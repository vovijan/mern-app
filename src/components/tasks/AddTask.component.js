import React from 'react';

import '../style.components.css';
import {Row} from "react-bootstrap";

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
					<button
						type="button"
						className="btn btn-info col mt-2"
						onClick={this.toggleVisibleTrue}
					>

						{
							!this.state.visible ?
								<i className="fas fa-arrow-circle-down"></i> :
								<i className="fas fa-arrow-circle-up"></i>
						}

					</button>
				</Row>
				{
					this.state.visible ?
						<div className="row input-rel">
							<input
								type="text"
								value={this.state.title}
								onChange={this.handleChange}
								className="form-control col-md-9 mt-2"
							/>
							<button
								type="button"
								className="btn btn-success col-md-3 mt-2 button-abs"
								onClick={this.toggleVisibleFalse}
							>
								<i className="fas fa-thumbtack"></i>
							</button>
						</div> : null
				}
			</>
		)
	}

}