import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "./NavBar.css";
import Logo_1 from "../../assets/images/ЛОГО 1.png";
import Icon, { Stack } from '@mdi/react';
import { mdiPhone } from '@mdi/js';

function NavBar() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#Logo">
						<img src={Logo_1} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav>
							<NavDropdown title="Мягкие окна" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Для беседок</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Для террас</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Для веранд</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.4">Для кафе</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#Услуги">Услуги</Nav.Link>
							<Nav.Link href="#Наши работы">Наши работы</Nav.Link>
							<Nav.Link href="#Стоимость">Стоимость</Nav.Link>
							<Nav.Link href="#О компании">О компании</Nav.Link>
							<Nav.Link href="#Контакты">Контакты</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Button>
						<Icon className="vector" path={mdiPhone} />
						<span>+7 (499) 277 23 26</span>
					</Button>
				</Container>
			</Navbar>
		</>
	)
}

export default NavBar;