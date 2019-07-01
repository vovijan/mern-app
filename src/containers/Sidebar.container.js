import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGroupList } from '../redux/actions';
import Sidebar from '../components/groups/Sidebar.component';

const mapStateToProps = state => ({
	state: state.data
});

const mapDispatchToProps = dispatch => ({
	getGroupList: () => {
		dispatch(getGroupList());
	}
});

class SidebarContainer extends Component {

	componentDidMount() {
		this.props.getGroupList();
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
