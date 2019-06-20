import React, { Component } from 'react';
import Group from './Group.component';

export default class GroupList extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-header">
					<h3>GROUP LIST</h3>
				</div>
				<div className="row">
					{
						this.props.data.map((item, i) => (
							 <Group
								 data={item}
								 key={i}
								 deleteGroup={this.props.deleteGroup}
							 />
						))
					}
				</div>
			</div>
		)
	}
}
