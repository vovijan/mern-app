import React from 'react';
import NavBarComponent from '../NavBar.component';

const CreateGroup = props => (
	<>
		<NavBarComponent
			placeholder="Enter new name of group"
			addData={props.addGroup}
			value="CREATE GROUP"
		/>
	</>
);

export default CreateGroup;