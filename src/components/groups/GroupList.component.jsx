import React, { Component } from 'react';
import Group from './Group.component';
import { Card } from "react-bootstrap";
import { DragDropContext } from 'react-beautiful-dnd';

export default class GroupList extends Component {

	onDragEnd = result => {

	};

	render() {
		return (
			<Card>
				<Card.Header>
					<h3>GROUP LIST</h3>
				</Card.Header>
				<DragDropContext onDragEnd={this.onDragEnd}>
					<div className="flex-row">
						{
							this.props.data.map((item, i) => (
								 <Group
									 data={item}
									 key={i}
									 deleteGroup={this.props.deleteGroup}
									 changeGroup={this.props.changeGroup}
								 />
							))
						}
					</div>
				</DragDropContext>
			</Card>
		)
	}
}
