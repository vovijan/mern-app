import React, { useState } from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavbarBrand } from 'react-bootstrap';

const NavBar = ({ addGroup }) => {

	const [value, setValue] = useState('');

	const onSubmit = event => {
		event.preventDefault();
		if (value.trim()) {
			addGroup(value);
			setValue('');
		}
	};

	return (
		<Navbar bg="dark" variant="dark" className="mb-5">
			<Container>
				<NavbarBrand >MERN-Stack App</NavbarBrand>
				<Nav className="mr-auto" />
				<Form inline
					onSubmit={onSubmit}
					className="my-2 my-lg-0"
				>
					<FormControl
						placeholder="Enter new name of group"
						autoFocus
						type="text"
						name="title"
						className="mr-sm-2"
						value={value}
						onChange={event => setValue(event.target.value)}
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
};

export default NavBar;
