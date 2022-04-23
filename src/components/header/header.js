import React from "react";
import { Button, Col, Container, Image } from "react-bootstrap";
import "./Header.css";
import SHukaturka from "../../assets/images/shukaturka-min 1.png";
import Icon, { Stack } from '@mdi/react';
import { mdiCheck } from '@mdi/js';

function Header() {
	return (
		<>
			<Container style={{ color: "#3d3d3d", position: "relative", padding: "0rem" }} fluid>
				<Image className="header_img" style={{ marginTop: "-50px", width: "100%", padding: "0rem" }} alt="SHukaturka!" src={SHukaturka} />
				<Col className="header" style={{ position: "absolute", top: "53%", left: "50%", transform: "translate(-50%, -50%)", width: "750px", }}>
					<h1 className="header_title" style={{ fontSize: "60px", fontWeight: "700" }}>Мягкие окна под ключ <br />
						<span style={{ color: "#21b24a" }}> от 1 250 руб/м2</span>
					</h1>
					<Col className="header_about" style={{ fontSize: "18px", display: "flex", padding: "0.3rem 0rem" }}>
						<Icon style={{ height: "16px", marginTop: "0.4rem" }} path={mdiCheck} />
						<span style={{ paddingLeft: "0.5rem" }}>Производим монтаж в течении 1 дня</span>
					</Col>
					<Col className="header_about" style={{ fontSize: "18px", display: "flex", padding: "0.3rem 0rem" }}>
						<Icon style={{ height: "16px", marginTop: "0.4rem" }} path={mdiCheck} />
						<span style={{ paddingLeft: "0.5rem" }}>Срок производства рассчитывается <br /> индивидуально для каждого заказчика</span>
					</Col>
					<Button className="header_CalculateButton" style={{ width: "100%", maxWidth: "250px", border: "1px solid #21B24A", backgroundColor: "#21b24a", color: "#fff", padding: "21px 40px", marginTop: "2.5rem" }}>Рассчитать стоимость</Button>
				</Col>
			</Container>
		</>
	);
};

export default Header;