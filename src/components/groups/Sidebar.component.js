import React, { Component } from 'react';

import '../style.components.css';

export default class Sidebar extends Component {

	render() {
		return (
			<div className="card">
				<div className="card-header">
					<h3>Sidebar</h3>
				</div>
				<div className="card-body">
					<h5 className="card-title">Специальный заголовок</h5>
					<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
				</div>
			</div>
		)
	}
};
