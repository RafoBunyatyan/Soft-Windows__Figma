import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Image } from "react-bootstrap";
import "./NavBar.css";
import Logo_1 from "../../assets/images/ЛОГО 1.png";
import Icon, { Stack } from '@mdi/react';
import { mdiPhone } from '@mdi/js';

function NavBar() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ zIndex: "1", }}>
				<Container>
					<Navbar.Brand href="#Logo">
						<Image src={Logo_1} alt="navbar brand!" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav style={{ width: "100%", maxWidth: " 822px", justifyContent: "space-between", margin: "0 auto", alignItems: "center", fontSize: "18px", }}>
							<NavDropdown title="Мягкие окна" id="collasible-nav-dropdown" style={{ lineHeight: "2.4rem", }}>
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
					<Button className="myButton" style={{ padding: "14px 20px", maxWidth: "200px", border: "1px solid #21b34a", color: "#21b24a", backgroundColor: "#363636", display: "flex", alignItems: "center", justifyContent: "center", }}>
						<Icon style={{ paddingRight: "0.15rem", height: "20px", }} path={mdiPhone} />
						<span>+7 (499) 277 23 26</span>
					</Button>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;