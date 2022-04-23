import React from "react";
import "./Aside.css";
import { Button, Container, Col, Row } from "react-bootstrap";
import Icon, { Stack } from '@mdi/react';
import { mdiCheck } from '@mdi/js';

function Aside() {
	return (
		<>
			<Container style={{ marginTop: "6rem" }} fluid >
				<Col style={{ textAlign: "center", display: "flex", alignItems: "center", flexDirection: "column", flexWrap: "wrap" }}>
					<h2 style={{ fontSize: "40px", width: "100%", fontWeight: "700", maxWidth: "391px" }}>Купить мягкие окна</h2>
					<span style={{ fontSize: "18px", color: "#5b5b5b", width: "100%", maxWidth: "834px" }}>Мягкие окна ПВХ - это отличная альтернатива классическому остеклению. Простота монтажа, долговечность, недорогая стоимость мягких окон… У нас можно купить шторы из гибкого ПВХ недорого и без ущерба качеству.</span>
				</Col>
				<Row lg={12} style={{ marginTop: '90px', display: "flex", alignItems: "center", }}>
					<Col lg={4} style={{ width: "100%", maxWidth: "420px", display: "flex", flexDirection: "column", justifyContent: "center", margin: "0 auto", alignItems: "center", flexWrap: "wrap" }}>
						<h5 style={{ fontSize: "25px", color: "#151515" }}>Стандарт</h5>
						<hr style={{ border: "2px solid #21b24a", width: "100%", maxWidth: "250px", margin: "0.8rem 0" }} />
						<h5 style={{ fontSize: "30px", color: "#151515" }}>от 1 100 руб/м2</h5>
						<Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
							<Icon style={{ height: "18px", }} path={mdiCheck} />
							<span style={{ fontSize: "18px", color: "#5b5b5b", marginLeft: "0.5rem" }}>Пленка Китай 700 мкм до -20</span>
						</Col>
						<Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
							<Icon style={{ height: "18px", }} path={mdiCheck} />
							<span style={{ fontSize: "18px", color: "#5b5b5b", marginLeft: "0.5rem" }}>C0 Окантовка ОКСФОРД Премиум</span>
						</Col>
						<Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
							<Icon style={{ height: "18px", }} path={mdiCheck} />
							<span style={{ fontSize: "18px", color: "#5b5b5b", marginLeft: "0.5rem" }}>Комплект креплений через <br /> каждые 40 см</span>
						</Col>
						<Button className="aside_button" style={{ width: "100%", maxWidth: "340px", color: '#21B34A', border: '1px solid #21B34A', backgroundColor: '#fff', padding: '22px 10px', }}>Оформить заказ</Button>
					</Col>
					<Col lg={4} style={{ width: "100%", maxWidth: "420px", display: "flex", flexDirection: "column", justifyContent: "center", margin: "0 auto", alignItems: "center", flexWrap: "wrap" }}>
						<h5 c style={{ fontSize: "25px", color: "#151515" }}>Премиум</h5>
						<hr style={{ border: "2px solid #21b24a", width: "100%", maxWidth: "250px", margin: "0.8rem 0" }} />
						<h5 style={{ fontSize: "30px", color: "#151515" }}>от 1 150 руб/м2</h5>
						<Col style={{ color: "#5b5b5b", width: "100%", maxWidth: "298px" }}>
							<Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
								<Icon style={{ height: "18px" }} path={mdiCheck} />
								<span style={{ fontSize: "18px", color: "#5b5b5b", marginLeft: "0.5rem" }}>Пленка Ю. КОрея 700 мкм до -40</span>
							</Col>
							<Icon style={{ height: "18px" }} path={mdiCheck} />
							<span style={{ fontSize: "18px", color: "#5b5b5b", marginLeft: "0.5rem" }}>C0 Окантовка тканью ОКСФОРД Премиум или ПВХ (выбор из цветов по каталогу)</span>
							<Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
								<Icon style={{ height: "18px" }} path={mdiCheck} />
								<span style={{ fontSize: "18px", color: "#5b5b5b", marginLeft: "0.5rem" }}>Комплект креплений через каждые 40 см</span>
							</Col>
						</Col>
						<Button className="aside_button" style={{ width: "100%", maxWidth: "340px", color: '#21B34A', border: '1px solid #21B34A', backgroundColor: '#fff', padding: '22px 10px', }}>Оформить заказ</Button>
					</Col>
					<Col lg={4} style={{ width: "100%", maxWidth: "420px", display: "flex", flexDirection: "column", justifyContent: "center", margin: "0 auto", alignItems: "center", flexWrap: "wrap" }}>
						<h5 style={{ fontSize: "25px", color: "#151515" }}>Под ключ</h5>
						<hr cla style={{ border: "2px solid #21b24a", width: "100%", maxWidth: "250px", margin: "0.8rem 0" }} />
						<h5 style={{ fontSize: "30px", color: "#151515" }}>от 1 550 руб/м2</h5>
						<Col style={{ color: "#5b5b5b", width: "100%", maxWidth: "298px" }}>
							<Icon style={{ height: "18px" }} path={mdiCheck} />
							<span style={{ fontSize: "18px", color: "#5b5b5b", marginLeft: "0.5rem" }}>В комплектации «Стандарт» включая замер, доставку и монтаж при заказе более 20 м2 и установке в деревянное плоское основание</span>
						</Col>
						<Button className="aside_button" style={{ width: "100%", maxWidth: "340px", color: '#21B34A', border: '1px solid #21B34A', backgroundColor: '#fff', padding: '22px 10px', }}>Оформить заказ</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Aside;