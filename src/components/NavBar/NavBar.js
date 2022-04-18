import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "./NavBar.css";
import Logo_1 from "../../assets/images/ЛОГО 1.png";
import Vector from "../../assets/images/Vector.png";

function NavBar() {


	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar">
				<Container>
					<Navbar.Brand href="#home"><img src={Logo_1} /></Navbar.Brand>
					<Navbar.Brand href="#home">Стоимость</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#features">Наши работы</Nav.Link>
							<Nav.Link href="#pricing">Услуги</Nav.Link>
							<NavDropdown title="Мягкие окна" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							<Nav.Link href="#deets">О компании</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
								Контакты
							</Nav.Link>
							<Button className="Telbutton">
								<div>
									<img src={Vector} />+7 (499) 277 23 26
								</div>
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

		</>
	)
}

export default NavBar;

