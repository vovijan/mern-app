import React, { Component } from 'react';
import Group from './Group.component';
import {Badge, Card} from "react-bootstrap";
import styled from 'styled-components';

const GroupBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export default class GroupList extends Component {

	render() {
		return (
			<Card>
				<Card.Header>
					<h3>GROUPS &nbsp;&nbsp;
						<Badge variant="secondary">
							{
								this.props.data.length === 0 ? null : this.props.data.length
							}
						</Badge>
					</h3>
				</Card.Header>
				<GroupBlock>
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
				</GroupBlock>
			</Card>
		)
	}
}
