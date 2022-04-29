import React from "react";
import './Window_Installation.js.css';
import { Col, Container, Row, Image } from "react-bootstrap";
import Installation from '../../assets/images/Installation.png';

function Window_Installation() {
	return (
		<>
			<Container fluid style={{ backgroundColor: '#31313F', }}>
				<Row className='Installation_container' style={{ maxWidth: '1600px', margin: '0px auto 150px', }}>
					<Col className='Installation_block' style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', }}>
						<Image src={Installation} alt='Installation!' className='Installation_img' style={{ padding: '94px 0px 99px', }} />
					</Col>
					<Col className='Installation_parent' style={{ color: '#FFFFFF', display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
						<h2 className='Installation_title' style={{ fontSize: '42px', maxWidth: '450px', }}> Монтаж мягких окон от 1150 руб/м2</h2>
						<ul className='Installation_item' style={{ fontSize: '18px', maxWidth: '690px', }}>
							<li><p className='Installation_text' style={{}}>Минимальная сумма монтажа 8000 рублей.</p></li>
							<li><p className='Installation_text' style={{ margin: '0.5rem 0rem', }}>Стоимость монтажа в кирпичные, бетонные, керамические или бревенчатые поверхности может быть увеличена по согласованию с заказчиком.</p></li>
							<li><p className='Installation_text' style={{}}>Обустройство дополнительных конструкций для крепления оплачивается отдельно.</p></li>
						</ul>
						<span className='Installation_span' style={{ marginTop: '20px', }}>Подробнее</span>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Window_Installation;