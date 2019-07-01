import React from 'react';
import {Container, Form, FormControl, Nav, Navbar, NavbarBrand} from 'react-bootstrap';

export default class NavBar extends React.Component {

	state = {
		title: ''
	};

	onChangeTitle = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addGroup(this.state.title);
		this.setState({
			title: ''
		});
	};

	render() {
		return (
			<Navbar bg="dark" variant="dark" className="mb-5">
				<Container>
					<NavbarBrand >MERN-Stack App</NavbarBrand>
					<Nav className="mr-auto" />
					<Form inline
						onSubmit={this.onSubmit}
						className="my-2 my-lg-0"
					>
						<FormControl
							placeholder="Enter new name of group"
							autoFocus
							type="text"
							name="title"
							className="mr-sm-2"
							value={this.state.title}
							onChange={this.onChangeTitle}
						/>
						<FormControl
							type="submit"
							value="CREATE GROUP"
							className="btn btn-outline-success my-2 my-sm-0"
						/>
					</Form>
				</Container>
			</Navbar>
		)
	}
}
