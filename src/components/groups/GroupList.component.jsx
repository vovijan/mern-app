import React from 'react';
import Group from './Group.component';
import { Badge, Card } from "react-bootstrap";
import styled from 'styled-components';

const GroupBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const GroupList = ({ data, deleteGroup, changeGroup }) => (
	<Card>
		<Card.Header>
			<h3>GROUPS &nbsp;&nbsp;
				<Badge variant="secondary">
					{
						data.length === 0 ? null : data.length
					}
				</Badge>
			</h3>
		</Card.Header>
		<GroupBlock>
			{
				data.map((item, i) => (
					 <Group
						 data={item}
						 key={i}
						 deleteGroup={deleteGroup}
						 changeGroup={changeGroup}
					 />
				))
			}
		</GroupBlock>
	</Card>
);

export default GroupList;
