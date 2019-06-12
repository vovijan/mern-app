import React from 'react';
import NavBar from './NavBar.component';

const CreateGroup = props => (
	<>
		<NavBar
			placeholder="Enter new name of group"
			addGroup={props.addGroup}
			value="CREATE GROUP"
		/>
	</>
);

export default CreateGroup;