import React from "react";
import './Post_Link.css';
import Rectangle from '../../assets/images/Rectangle_100.png';
import { Button, Col, Row, Container, Image } from "react-bootstrap";

function Post_Link() {
	return (
		<>
			<Container fluid className='' style={{ maxWidth: '1600px', padding: '0', }}>
				<Row className='' style={{ margin: '45px auto', }}>
					<Image fluid className='article_image' src={Rectangle} alt='Rectangle!' style={{ height: '245px', padding: '0', }} />
					<Col className='article_about' style={{ marginTop: '-245px', display: 'flex', }}>
						<Col className='article_block' style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', flexFlow: 'column wrap', }}>
							<h3 className='article_title' style={{ fontSize: '33px', }}>Не можете определиться с выбором?</h3>
							<p className='article_text' style={{ fontSize: '18px', marginBottom: '0.3rem', }}>Оставьте заявку и мы свяжемся с Вами в ближайшее время</p>
						</Col>
						<Col className='article_button' style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center', }}>
							<Button className='article_numberButton' style={{ border: "2px solid #21b24a", color: '#868484', backgroundColor: '#fff', padding: '22px 86px', fontSize: "14px", }}>
								Ваш номер телефона
							</Button>
							<Button className='article_PostButton' style={{ border: "2px solid #21b24a", color: '#fff', backgroundColor: '#21B24A', padding: '21px 83px', }}>
								Отправить заявку
							</Button>
						</Col>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Post_Link;