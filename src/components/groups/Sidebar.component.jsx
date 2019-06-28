import React, { Component } from 'react';
import {Card} from "react-bootstrap";

export default class Sidebar extends Component {

	render() {
		return (
			<Card>
				<Card.Header>
					<h3>Sidebar</h3>
				</Card.Header>
				<Card.Body>
					<Card.Title>Специальный заголовок</Card.Title>
					<Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
				</Card.Body>
			</Card>
		)
	}
};
