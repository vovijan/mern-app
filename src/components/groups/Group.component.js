import React  from 'react';

import '../style.components.css';

const Group = props => (
	<div className="card" style={{ border: 'none' }}>
		<div className="card-body">
			<div className="row">
				<input
					type="text"
					value={ props.data.title }
					className="form-control mb-2"
				/>
			</div>
			<div className="row">
				<button
					className="btn btn-primary col mr-2"
					onClick={() => {
						props.deleteGroup(props.data._id);
					}}
				>
					<i className="fas fa-check"></i>
				</button>
				<button
					className="btn btn-danger col ml-2"
					onClick={() => {
						props.deleteGroup(props.data._id);
					}}
				>
					<i className="fas fa-ban"></i>
				</button>
			</div>
		</div>
	</div>
);

export default Group;