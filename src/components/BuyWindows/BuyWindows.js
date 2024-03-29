import React from "react";
import "./BuyWindows.css";
import Rectangle from '../../assets/images/Rectangle_100.png';
import Icon, { Stack } from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import { Container, Col, Row, Image, } from "react-bootstrap";
import Button from '@mui/material/Button';

function BuyWindows() {
	return (
		<>
			<Container fluid className="buyWindows__container" style={{ marginTop: "6rem", padding: '0', }}>
				<Col className="buyWindows__header" style={{ textAlign: "center", display: "flex", alignItems: "center", flexFlow: 'column wrap', }}>
					<h2 className="buyWindows__title" style={{ fontSize: "40px", fontWeight: "700", }}>Купить мягкие окна</h2>
					<p className="buyWindows__text" style={{ margin: '0', fontSize: "18px", color: "#5b5b5b", width: "100%", maxWidth: "834px", }}>Мягкие окна ПВХ - это отличная альтернатива классическому остеклению. Простота монтажа, долговечность, недорогая стоимость мягких окон… У нас можно купить шторы из гибкого ПВХ недорого и без ущерба качеству.</p>
				</Col>
				<Row style={{ margin: '50px auto 0px', maxWidth: '1600px', }}>
					<Col lg={4} style={{ width: "100%", maxWidth: "420px", display: "flex", flexFlow: "column wrap", margin: "40px auto", alignItems: "center", }}>
						<h4 className="buyWindows__subTitle" style={{ fontSize: "25px", color: "#151515", margin: "0", }}>Стандарт</h4>
						<hr style={{ border: "2px solid #21b24a", width: "100%", maxWidth: "250px", margin: "0.8rem 0rem", }} />
						<span style={{ fontSize: "28px", color: "#151515", margin: "0.5rem 0rem  1.2rem", }}>от 1 100 руб/м2</span>
						<Col style={{ width: "100%", maxWidth: "300px", }}>
							<Col style={{ display: "flex", }}>
								<Icon path={mdiCheck} style={{ height: "18px", margin: "0.4rem 0.5rem 0rem 0rem", }} />
								<Col>
									<p className="buyWindows__text" style={{ margin: '0', fontSize: "18px", color: "#5b5b5b", }}>Пленка Китай 700 мкм до -20</p>
								</Col>
							</Col>
							<Col style={{ display: "flex", }}>
								<Icon path={mdiCheck} style={{ height: "18px", margin: "0.4rem 0.5rem 0rem 0rem", }} />
								<Col>
									<p className="buyWindows__text" style={{ margin: '0', fontSize: "18px", color: "#5b5b5b", }}>C0 Окантовка ОКСФОРД Премиум</p>
								</Col>
							</Col>
							<Col style={{ display: "flex", }}>
								<Icon path={mdiCheck} style={{ height: "18px", margin: "0.4rem 0.5rem 0rem 0rem", }} />
								<Col>
									<p className="buyWindows__text" style={{ margin: '0', fontSize: "18px", color: "#5b5b5b", }}>Комплект креплений через <br /> каждые 40 см</p>
								</Col>
							</Col>
						</Col>
						<Button className="buyWindows__button" style={{ margin: '52px 0px 40px 0px', width: "100%", maxWidth: "340px", color: '#21B34A', border: '1px solid #21B34A', backgroundColor: '#e5e5e5', padding: '22px 10px', }}>Оформить заказ</Button>
					</Col>
					<Col lg={4} style={{ width: "100%", maxWidth: "420px", display: "flex", flexFlow: "column wrap", margin: "40px auto", alignItems: "center", }}>
						<h4 className="buyWindows__subTitle" style={{ fontSize: "25px", color: "#151515", }}>Премиум</h4>
						<hr style={{ border: "2px solid #21b24a", width: "100%", maxWidth: "250px", margin: "0.8rem 0rem", }} />
						<span style={{ fontSize: "28px", color: "#151515", margin: "0.5rem 0rem  1.2rem", }}>от 1 150 руб/м2</span>
						<Col style={{ width: "100%", maxWidth: "320px", }}>
							<Col style={{ display: "flex", }}>
								<Icon path={mdiCheck} style={{ height: "18px", margin: "0.4rem 0.5rem 0rem 0rem", }} />
								<Col>
									<p className="buyWindows__text" style={{ margin: '0', fontSize: "18px", color: "#5b5b5b", }}>Пленка Ю. КОрея 700 мкм до -40</p>
								</Col>
							</Col>
							<Col style={{ display: "flex", }}>
								<Icon path={mdiCheck} style={{ height: "18px", margin: "0.4rem 0.5rem 0rem 0rem", }} />
								<Col>
									<p className="buyWindows__text" style={{ margin: '0', fontSize: "18px", color: "#5b5b5b", }}>C0 Окантовка тканью ОКСФОРД Премиум или ПВХ (выбор из цветов по каталогу)</p>
								</Col>
							</Col>
							<Col style={{ display: "flex", }}>
								<Icon path={mdiCheck} style={{ height: "18px", margin: "0.4rem 0.5rem 0rem 0rem", }} />
								<Col>
									<p className="buyWindows__text" style={{ margin: '0', fontSize: "18px", color: "#5b5b5b", }}>Комплект креплений через каждые 40 см</p>
								</Col>
							</Col>
						</Col>
						<Button className="buyWindows__button" style={{ margin: '52px 0px 40px 0px', width: "100%", maxWidth: "340px", color: '#21B34A', border: '1px solid #21B34A', backgroundColor: '#e5e5e5', padding: '22px 10px', }}>Оформить заказ</Button>
					</Col>
					<Col lg={4} style={{ width: "100%", maxWidth: "420px", display: "flex", flexFlow: "column wrap", margin: "40px auto", alignItems: "center", }}>
						<h4 className="buyWindows__subTitle" style={{ fontSize: "25px", color: "#151515", }}>Под ключ</h4>
						<hr style={{ border: "2px solid #21b24a", width: "100%", maxWidth: "250px", margin: "0.8rem 0rem", }} />
						<span style={{ fontSize: "28px", color: "#151515", margin: "0.5rem 0rem 1.2rem", }}>от 1 550 руб/м2</span>
						<Col style={{ display: "flex", width: "100%", maxWidth: "297px", }}>
							<Icon path={mdiCheck} style={{ height: "18px", margin: "0.4rem 0.5rem 0rem 0rem", }} />
							<Col>
								<span className="buyWindows__text" style={{ fontSize: "18px", color: "#5b5b5b", }}>В комплектации «Стандарт» включая замер, доставку и монтаж при заказе более 20 м2 и установке в деревянное плоское основание</span>
							</Col>
						</Col>
						<Button className="buyWindows__button" style={{ margin: '52px 0px 40px 0px', width: "100%", maxWidth: "340px", color: '#21B34A', border: '1px solid #21B34A', backgroundColor: '#e5e5e5', padding: '22px 10px', }}>Оформить заказ</Button>
					</Col>
				</Row>
				<Row style={{ margin: '45px auto', }}>
					<Image fluid className='buyWindows__image' src={Rectangle} alt='Rectangle!' style={{ height: '245px', padding: '0', }} />
					<Col style={{ marginTop: '-245px', display: 'flex', }}>
						<Col className='buyWindows__about_container' style={{ margin: '0 auto', maxWidth: '1600px', display: 'flex', }} >
							<Col className='buyWindows__about_block' style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', flexFlow: 'column wrap', }}>
								<h3 className='buyWindows__about_title' style={{ fontSize: '33px', }}>Не можете определиться с выбором?</h3>
								<p className='buyWindows__about_text' style={{ fontSize: '18px', marginBottom: '0.3rem', }}>Оставьте заявку и мы свяжемся с Вами в ближайшее время</p>
							</Col>
							<Col className='buyWindows__about_buttonBlock' style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center', }}>
								<Button className='buyWindows__about_numberButton' style={{ border: "2px solid #21b24a", color: '#868484', backgroundColor: '#e5e5e5', padding: '21px 67px', fontSize: "14px", }}>Ваш номер телефона</Button>
								<Button className='buyWindows__about_postButton' style={{ border: "2px solid #21b24a", color: '#fff', backgroundColor: '#21B24A', padding: '21px 73px', }}>Отправить заявку</Button>
							</Col>
						</Col>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default BuyWindows;