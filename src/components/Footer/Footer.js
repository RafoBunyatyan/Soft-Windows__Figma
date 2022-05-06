import React from "react";
import './Footer.css';
import { Container, Col, Row, } from "react-bootstrap";

function Footer() {
	return (
		<>
			<Container fluid style={{ backgroundColor: '#35353C', }}>
				<Row style={{ maxWidth: '1600px', margin: '0 auto', }}>
					<Col className='Footer_about' style={{ color: '#fff', display: 'flex', flexWrap: 'wrap', marginTop: '106px', justifyContent: 'space-around', }}>
						<h6 className='Footer_text_block' style={{ fontSize: '18px', paddingRight: '10px', marginBottom: '33px', }}>Logotype</h6>
						<Col style={{ marginBottom: '40px', maxWidth: '145px', }}>
							<h4 className='Footer_title' style={{ fontSize: '24px', marginBottom: '33px', }}>Компания</h4>
							<Col className='Footer_text_block' style={{ fontSize: '18px', display: 'flex', flexDirection: 'column', }}>
								<a href='#' className='Footer_text'>Стоимость</a>
								<a href='#' className='Footer_text'>О нас</a>
								<a href='#' className='Footer_text'>Блог</a>
								<a href='#' className='Footer_text'>Контакты</a>
							</Col>
						</Col>
						<Col style={{ marginBottom: '40px', maxWidth: '195px', }}>
							<h4 className='Footer_title' style={{ fontSize: '24px', marginBottom: '33px', }}>Мягкие окна</h4>
							<Col className='Footer_text_block' style={{ fontSize: '18px', display: 'flex', flexDirection: 'column', }}>
								<a href='#' className='Footer_text'>Для беседок</a>
								<a href='#' className='Footer_text'>Для террас</a>
								<a href='#' className='Footer_text'>Для веранд</a>
								<a href='#' className='Footer_text'>Для кафе</a>
							</Col>
						</Col>
						<Col style={{ marginBottom: '40px', maxWidth: '335px', }}>
							<h4 className='Footer_title' style={{ fontSize: '24px', marginBottom: '33px', }}>Контакты</h4>
							<Col className='Footer_text_block' style={{ fontSize: '18px', display: 'flex', flexDirection: 'column', }}>
								<a href='#' className='Footer_text'>г. Москва, Илимская улица, 1Бс1</a>
								<a href='#' className='Footer_text'>+7 (499) 277 23 26</a>
								<a href='#' className='Footer_text'>okna@myagok.ru</a>
								<a href='#' className='Footer_text'>Пн. - Пт. 11:00 - 19:00 Сб. - Вс. Выходной</a>
							</Col>
						</Col>
						<hr style={{ marginTop: '40px', width: '94%', border: '1px solid rgba(255, 255, 255, 0.8)', }} />
						<p style={{ fontSize: '12px', textAlign: 'center', margin: '14px auto 22px', }}>© 2020 — Все права защищены.</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Footer;