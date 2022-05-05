import React from "react";
import './Footer.css';
import { Container, Col, Row, } from "react-bootstrap";

function Footer() {
	return (
		<>
			<Container fluid style={{ backgroundColor: '#35353C', }}>
				<Row style={{ maxWidth: '1600px', margin: '0 auto', }}>
					<Col className='Footer_about' style={{ color: '#fff', display: 'flex', flexWrap: 'wrap', marginTop: '106px', }}>
						<Col style={{ display: 'flex', justifyContent: 'center', }}>
							<h4 className='Footer_title' style={{ fontSize: '24px', }}>Logotype</h4>
						</Col>
						<Col className='Footer_block' style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', }}>
							<h4 className='Footer_title' style={{ fontSize: '24px', marginBottom: '33px', }}>Компания</h4>
							<Col className='Footer_text_block' style={{ fontSize: '18px', display: 'flex', flexDirection: 'column', }}>
								<a>Стоимость</a>
								<a>О нас</a>
								<a>Блог</a>
								<a>Контакты</a>
							</Col>
						</Col>
						<Col className='Footer_block' style={{ display: 'flex', flexDirection: 'column', }}>
							<h4 className='Footer_title' style={{ fontSize: '24px', marginBottom: '33px', }}>Мягкие окна</h4>
							<Col className='Footer_text_block' style={{ fontSize: '18px', display: 'flex', flexDirection: 'column', }}>
								<a>Для беседок</a>
								<a>Для террас</a>
								<a>Для веранд</a>
								<a>Для кафе</a>
							</Col>
						</Col>
						<Col className='Footer_block' style={{ display: 'flex', flexDirection: 'column', }}>
							<h4 className='Footer_title' style={{ fontSize: '24px', marginBottom: '33px', }}>Контакты</h4>
							<Col className='Footer_text_block' style={{ fontSize: '18px', display: 'flex', flexDirection: 'column', }}>
								<a>г. Москва, Илимская улица, 1Бс1</a>
								<a>+7 (499) 277 23 26</a>
								<a>okna@myagok.ru</a>
								<a>Пн. - Пт. 11:00 - 19:00 Сб. - Вс. Выходной</a>
							</Col>
						</Col>
						<hr className='Footer_hr' style={{ marginTop: '47px', width: '100%', border: '1px solid rgba(255, 255, 255, 0.8)', }} />
						<p style={{ fontSize: '12px', textAlign: 'center', margin: '14px auto 25px', }}>© 2020 — Все права защищены.</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Footer;