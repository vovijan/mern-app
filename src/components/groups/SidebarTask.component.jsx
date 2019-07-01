import React from 'react';

const SidebarTask = ({ items }) => (
	<>
		{
			items.map((arr, k) =>
				<ul
					key={k}
				>
					<li>
						{arr.title}
					</li>
				</ul>
			)
		}
	</>
);

export default SidebarTask;