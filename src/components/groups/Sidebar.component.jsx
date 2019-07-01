import React  from 'react';
import { Card } from "react-bootstrap";
import SidebarTask from "./SidebarTask.component";

const SidebarGroup = ({ data }) => (
	<Card>
		<Card.Header>
			<h3>Group List</h3>
		</Card.Header>

		{
			data.map((item, i) =>
				<ul
					key={i}
				>
					<li>
						{item.title}

						<SidebarTask
							items={item.items}
						/>

					</li>
				</ul>
			)
		}

	</Card>
);

export default SidebarGroup;
