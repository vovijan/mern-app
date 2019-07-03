import React, { useState } from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavbarBrand } from 'react-bootstrap';

const useInputValue = (defaultValue = '') => {
	const [value, setValue] = useState(defaultValue);
	return {
		bind: {
			value,
			onChange: event => setValue(event.target.value)
		},
		clear: () => setValue(''),
		value: () => value
	};
};

const NavBar = ({ addGroup }) => {

	const input = useInputValue('');

	const onSubmit = event => {
		event.preventDefault();
		if (input.value().trim()) {
			addGroup(input.value());
			input.clear();
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
						{...input.bind}
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
