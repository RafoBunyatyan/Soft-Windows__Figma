import React from "react";
import './Post_Link.css';
import Rectangle from '../../assets/images/Rectangle_100.png';
import { Button, Col, Row, Container, Image } from "react-bootstrap";

function Post_Link() {
	return (
		<>
			<Container className='' style={{ margin: '45px auto', maxWidth: '1600px', padding: '0', }}>
				<Row style={{ display: 'flex', alignItems: 'center', margin: '10px auto', }}>
					<Image className='aside_img' src={Rectangle} alt='Rectangle!' style={{ maxWidth: '1600px', height: '245px', }} />
					<Col style={{ marginTop: '-200px', display: 'flex', alignItems: 'center', }}>
						<Col style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '0', }}>
							<h3 className='' style={{ fontSize: '35px', }}>Не можете определиться с выбором?</h3>
							<p className='' style={{ fontSize: '18px', }}>Оставьте заявку и мы свяжемся с Вами в ближайшее время</p>
						</Col>
						<Col style={{}}>
							<Button className='aside_numberButton' style={{ border: "2px solid #21b24a", color: '#868484', backgroundColor: '#fff', padding: '22px 86px', fontSize: "14px", }}>Ваш номер телефона</Button>
							<Button className='aside_PostButton' style={{ border: "2px solid #21b24a", color: '#fff', backgroundColor: '#21B24A', padding: '22px 91px', fontSize: "14px", }}>Отправить заявку</Button>
						</Col>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Post_Link;