import React, { Component } from 'react';
import Group from './Group.component';
import { Card } from "react-bootstrap";
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Fellow = styled.div`
	display: flex;
  justify-content: center;
`;

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
					<Fellow>
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
					</Fellow>
				</DragDropContext>
			</Card>
		)
	}
}
