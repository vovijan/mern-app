import React, { Component } from 'react';
import Group from './Group.component';
import '../App.css';

export default class GroupTodos extends Component {
	render() {
		return (
			<>
				<h3>GROUP LIST</h3>
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
			</>
		)
	}
}
