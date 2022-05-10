import React from "react";
import "./SoftWindows.css";
import SHukaturka from "../../assets/images/shukaturka-min 1.png";
import Icon, { Stack } from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import { Col, Container, Image, Row, } from "react-bootstrap";
import Button from '@mui/material/Button';

function SoftWindows() {
	return (
		<>
			<Container fluid style={{ position: "relative", padding: "0rem", }} >
				<Row>
					<Image className="softWindows__image" src={SHukaturka} alt="SHukaturka!" style={{ marginTop: "-50px", width: "100%", padding: "0rem", }} />
					<Col className="softWindows__body" style={{ padding: "0rem 0.35rem", position: "absolute", top: "53%", left: "40%", transform: "translate(-50%, -50%)", width: "750px", }}>
						<h1 className="softWindows__title" style={{ padding: "0rem 0.5rem", fontSize: "60px", fontWeight: "700", }}>Мягкие окна под ключ <br />
							<span style={{ color: "#21b24a", }}> от 1 250 руб/м2</span>
						</h1>
						<Col className="softWindows__about" style={{ fontSize: "18px", display: "flex", padding: "0.3rem 0rem", }}>
							<Icon path={mdiCheck} style={{ height: "18px", marginTop: "0.4rem", }} />
							<p style={{ paddingLeft: "0.5rem", marginBottom: "0", }}>Производим монтаж в течении 1 дня</p>
						</Col>
						<Col className="softWindows__about" style={{ fontSize: "18px", display: "flex", padding: "0.3rem 0rem", }}>
							<Icon path={mdiCheck} style={{ height: "18px", marginTop: "0.4rem", }} />
							<p style={{ paddingLeft: "0.5rem", marginBottom: "0", }}>Срок производства рассчитывается <br />	индивидуально для каждого заказчика</p>
						</Col>
						<Button className="softWindows__button" style={{ border: "1px solid #21B24A", backgroundColor: "#21b24a", color: "#fff", padding: "21px 38px", marginTop: "2.5rem", }}>Рассчитать стоимость</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default SoftWindows;