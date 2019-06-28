import React, { Component } from 'react';
import { connect } from 'react-redux';
import { groupList } from '../redux/actions';
import Sidebar from '../components/groups/Sidebar.component';

const mapStateToProps = state => ({
	state: state.data
});

const mapDispatchToProps = dispatch => ({
	groupList: () => {
		dispatch(groupList());
	}
});

class SidebarContainer extends Component {

	componentDidMount() {
		this.props.groupList();
	}

	render() {
		const { state } = this.props;
		return (
			<Sidebar
				data={ state }
			/>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SidebarContainer)
