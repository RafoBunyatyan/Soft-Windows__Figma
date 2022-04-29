import React from "react";
import { Button, Col, Container, Image } from "react-bootstrap";
import "./Soft_Windows.css";
import SHukaturka from "../../assets/images/shukaturka-min 1.png";
import Icon, { Stack } from '@mdi/react';
import { mdiCheck } from '@mdi/js';

function Soft_Windows() {
	return (
		<>
			<Container fluid style={{ maxWidth: "1600px", position: "relative", padding: "0rem", }} >
				<Image className="header_img" src={SHukaturka} alt="SHukaturka!" style={{ marginTop: "-50px", width: "100%", padding: "0rem", }} />
				<Col className="header" style={{ padding: "0rem 0.35rem", position: "absolute", top: "53%", left: "38%", transform: "translate(-50%, -50%)", width: "750px", }}>
					<h1 className="header_title" style={{ padding: "0rem 0.5rem", fontSize: "60px", fontWeight: "700", }}>Мягкие окна под ключ <br />
						<span style={{ color: "#21b24a", }}> от 1 250 руб/м2</span>
					</h1>
					<Col className="header_about" style={{ fontSize: "18px", display: "flex", padding: "0.3rem 0rem", }}>
						<Icon path={mdiCheck} style={{ height: "18px", marginTop: "0.4rem", }} />
						<p style={{ paddingLeft: "0.5rem", marginBottom: "0", }}>Производим монтаж в течении 1 дня</p>
					</Col>
					<Col className="header_about" style={{ fontSize: "18px", display: "flex", padding: "0.3rem 0rem", }}>
						<Icon path={mdiCheck} style={{ height: "18px", marginTop: "0.4rem", }} />
						<p style={{ paddingLeft: "0.5rem", marginBottom: "0", }}>
							Срок производства рассчитывается <br />	индивидуально для каждого заказчика
						</p>
					</Col>
					<Button className="header_button" style={{ width: "100%", maxWidth: "250px", border: "1px solid #21B24A", backgroundColor: "#21b24a", color: "#fff", padding: "21px 40px", marginTop: "2.5rem", }}>
						Рассчитать стоимость
					</Button>
				</Col>
			</Container>
		</>
	);
};

export default Soft_Windows;