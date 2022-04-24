import React from "react";
import "./BuyWindows.css";
import { Button, Container, Col, Row } from "react-bootstrap";
import Icon, { Stack } from '@mdi/react';
import { mdiCheck } from '@mdi/js';

function BuyWindows() {
	return (
		<>
			<Container fluid className="myContainer" style={{ marginTop: "6rem", maxWidth: '1440px', padding: '0', }}>
				<Col className="myContainer_header" style={{ textAlign: "center", display: "flex", alignItems: "center", flexDirection: "column", flexWrap: "wrap", }}>
					<h2 className="myContainer_title" style={{ fontSize: "40px", width: "100%", fontWeight: "700", maxWidth: "391px", }}>Купить мягкие окна</h2>
					<p className="myContainer_text" style={{ margin: '0', fontSize: "18px", color: "#5b5b5b", width: "100%", maxWidth: "834px", }}>Мягкие окна ПВХ - это отличная альтернатива классическому остеклению. Простота монтажа, долговечность, недорогая стоимость мягких окон… У нас можно купить шторы из гибкого ПВХ недорого и без ущерба качеству.</p>
				</Col>
				<Row style={{ margin: '50px 0px 0px', }}>
					<Col lg={4} style={{ width: "100%", maxWidth: "420px", display: "flex", flexDirection: "column", margin: "40px auto", alignItems: "center", flexWrap: "wrap", }}>
						<h3 className="myContainer_title_sub" style={{ fontSize: "25px", color: "#151515", margin: "0", }}>Стандарт</h3>
						<hr style={{ border: "2px solid #21b24a", width: "100%", maxWidth: "250px", margin: "0.8rem 0rem", }} />
						<span style={{ fontSize: "30px", color: "#151515", margin: "0.5rem 0rem  1.2rem", }}>от 1 100 руб/м2</span>
						<Col style={{ width: "100%", maxWidth: "300px", }}>
							<Col style={{ display: "flex", }}>
								<Icon path={mdiCheck} style={{ height: "18px", margin: "0.4rem 0.5rem 0rem 0rem", }} />
								<Col>
									<p className="myContainer_text" style={{ margin: '0', fontSize: "18px", color: "#5b5b5b", }}>Пленка Китай 700 мкм до -20</p>
								</Col>
							</Col>
							<Col style={{ display: "flex", }}>
								<Icon path={mdiCheck} style={{ height: "18px", margin: "0.4rem 0.5rem 0rem 0rem", }} />
								<Col>
									<p className="myContainer_text" style={{ margin: '0', fontSize: "18px", color: "#5b5b5b", }}>C0 Окантовка ОКСФОРД Премиум</p>
								</Col>
							</Col>
							<Col style={{ display: "flex", }}>
								<Icon path={mdiCheck} style={{ height: "18px", margin: "0.4rem 0.5rem 0rem 0rem", }} />
								<Col>
									<p className="myContainer_text" style={{ margin: '0', fontSize: "18px", color: "#5b5b5b", }}>Комплект креплений через <br /> каждые 40 см</p>
								</Col>
							</Col>
						</Col>
						<Button className="myContainer_button" style={{ margin: '52px 0px 40px 0px', width: "100%", maxWidth: "340px", color: '#21B34A', border: '1px solid #21B34A', backgroundColor: '#fff', padding: '22px 10px', }}>Оформить заказ</Button>
					</Col>
					<Col lg={4} style={{ width: "100%", maxWidth: "420px", display: "flex", flexDirection: "column", margin: "40px auto", alignItems: "center", flexWrap: "wrap", }}>
						<h3 className="myContainer_title_sub" style={{ fontSize: "25px", color: "#151515", }}>Премиум</h3>
						<hr style={{ border: "2px solid #21b24a", width: "100%", maxWidth: "250px", margin: "0.8rem 0rem", }} />
						<span style={{ fontSize: "30px", color: "#151515", margin: "0.5rem 0rem  1.2rem", }}>от 1 150 руб/м2</span>
						<Col style={{ width: "100%", maxWidth: "320px", }}>
							<Col style={{ display: "flex", }}>
								<Icon path={mdiCheck} style={{ height: "18px", margin: "0.4rem 0.5rem 0rem 0rem", }} />
								<Col>
									<p className="myContainer_text" style={{ margin: '0', fontSize: "18px", color: "#5b5b5b", }}>Пленка Ю. КОрея 700 мкм до -40</p>
								</Col>
							</Col>
							<Col style={{ display: "flex", }}>
								<Icon path={mdiCheck} style={{ height: "18px", margin: "0.4rem 0.5rem 0rem 0rem", }} />
								<Col>
									<p className="myContainer_text" style={{ margin: '0', fontSize: "18px", color: "#5b5b5b", }}>C0 Окантовка тканью ОКСФОРД Премиум или ПВХ (выбор из цветов по каталогу)</p>
								</Col>
							</Col>
							<Col style={{ display: "flex", }}>
								<Icon path={mdiCheck} style={{ height: "18px", margin: "0.4rem 0.5rem 0rem 0rem", }} />
								<Col>
									<p className="myContainer_text" style={{ margin: '0', fontSize: "18px", color: "#5b5b5b", }}>Комплект креплений через каждые 40 см</p>
								</Col>
							</Col>
						</Col>
						<Button className="myContainer_button" style={{ margin: '52px 0px 40px 0px', width: "100%", maxWidth: "340px", color: '#21B34A', border: '1px solid #21B34A', backgroundColor: '#fff', padding: '22px 10px', }}>Оформить заказ</Button>
					</Col>
					<Col lg={4} style={{ width: "100%", maxWidth: "420px", display: "flex", flexDirection: "column", margin: "40px auto", alignItems: "center", flexWrap: "wrap", }}>
						<h3 className="container_title_sub" style={{ fontSize: "25px", color: "#151515", }}>Под ключ</h3>
						<hr style={{ border: "2px solid #21b24a", width: "100%", maxWidth: "250px", margin: "0.8rem 0rem", }} />
						<span style={{ fontSize: "30px", color: "#151515", margin: "0.5rem 0rem 1.2rem", }}>от 1 550 руб/м2</span>
						<Col style={{ display: "flex", width: "100%", maxWidth: "297px", }}>
							<Icon path={mdiCheck} style={{ height: "18px", margin: "0.4rem 0.5rem 0rem 0rem", }} />
							<Col>
								<span className="myContainer_text" style={{ fontSize: "18px", color: "#5b5b5b", }}>В комплектации «Стандарт» включая замер, доставку и монтаж при заказе более 20 м2 и установке в деревянное плоское основание</span>
							</Col>
						</Col>
						<Button className="myContainer_button" style={{ margin: '52px 0px 40px 0px', width: "100%", maxWidth: "340px", color: '#21B34A', border: '1px solid #21B34A', backgroundColor: '#fff', padding: '22px 10px', }}>Оформить заказ</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default BuyWindows;