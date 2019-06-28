import React, { Component } from 'react';
import { Card } from "react-bootstrap";

export default class Sidebar extends Component {

	render() {
		return (
			<Card>
				<Card.Header>
					<h3>Group List</h3>
				</Card.Header>
				<Card.Body>
					{
						this.props.data.map((item, i) =>
							<ul
								key={i}
							>
								<li>
									{item.title}

									{
										item.items.map((arr, k) =>
											<ul
												key={k}
											>
												<li>
													{arr.title}
												</li>
											</ul>
										)
									}

								</li>
							</ul>
						)
					}
				</Card.Body>
			</Card>
		)
	}
};
