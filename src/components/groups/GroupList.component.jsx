import React, { Component } from 'react';
import Group from './Group.component';
import { Card } from "react-bootstrap";
import styled from 'styled-components';

const Flexrow = styled.div`
	display: flex;
  justify-content: center;
`;

export default class GroupList extends Component {

	render() {
		return (
			<Card>
				<Card.Header>
					<h3>GROUP LIST</h3>
				</Card.Header>
					<Flexrow>
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
					</Flexrow>
			</Card>
		)
	}
}
