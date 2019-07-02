import React  from 'react';
import { connect } from 'react-redux';
import SidebarGroup from '../components/groups/Sidebar.component';

const mapStateToProps = state => ({
	state: state.data
});

const SidebarContainer = ({ state }) =>
	<SidebarGroup
		data={ state }
	/>;

export default connect(
	mapStateToProps,
	null
)(SidebarContainer)
