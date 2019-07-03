import React from 'react';
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const TaskButtonGroup = ({ placement, title, onClick, variant }) => (
	<OverlayTrigger
		placement={ placement }
		overlay={
			<Tooltip id={`tooltip-${ placement }`}>
				{ title }
			</Tooltip>
		}
	>
		<Button
			variant={`outline-${variant}`}
			onClick={ onClick }
		/>
	</OverlayTrigger>
);

export default TaskButtonGroup;
