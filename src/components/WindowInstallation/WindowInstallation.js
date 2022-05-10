import React from "react";
import './WindowInstallation.js.css';
import Installation from '../../assets/images/Installation.png';
import { Col, Container, Row, Image } from "react-bootstrap";

function WindowInstallation() {
	return (
		<>
			<Container fluid style={{ backgroundColor: '#31313F', }}>
				<Row className='windowInstallation__container' style={{ margin: '0px auto 150px', maxWidth: '1600px', }}>
					<Col>
						<Image fluid src={Installation} alt='Installation!' className='windowInstallation__img' style={{ padding: '94px 0px 99px 24px', }} />
					</Col>
					<Col className='windowInstallation__about' style={{ color: '#FFFFFF', display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
						<h2 className='windowInstallation__title' style={{ fontSize: '42px', }}> Монтаж мягких окон от 1150 руб/м2</h2>
						<ul className='windowInstallation__parent' style={{ fontSize: '18px', }}>
							<li>Минимальная сумма монтажа 8000 рублей.</li>
							<li className='windowInstallation__parent_text' style={{ margin: '0.5rem 0rem', }}>Стоимость монтажа в кирпичные, бетонные, керамические или бревенчатые поверхности может быть увеличена по согласованию с заказчиком.</li>
							<li>Обустройство дополнительных конструкций для крепления оплачивается отдельно.</li>
						</ul>
						<span className='windowInstallation__parent_span' style={{ marginTop: '20px', }}>Подробнее</span>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default WindowInstallation;