import React  from 'react';
import { Link } from 'react-router-dom';

const Group = props => (
	<div className="col-sm-4 mb-4">
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">Group Name</h5>
				<p className="card-text">-{ props.data.title }-</p>
				<Link to={`/${props.data._id}`} className="btn btn-info mr-3">EDIT</Link>
				<button
					className="btn btn-danger"
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