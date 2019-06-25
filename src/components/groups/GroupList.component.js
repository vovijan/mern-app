import React, { Component } from 'react';
import Group from './Group.component';
//import GroupContainer from "../../containers/Group.container";

export default class GroupList extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-header">
					<h3>GROUP LIST</h3>
				</div>
				<div className="d-flex">
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
				</div>
			</div>
		)
	}
}
