import React from "react";
import './We_Working.css';
import { Col, Container, Row, Image, Button, } from "react-bootstrap";
import Unsplash from '../../assets/images/unsplash.png';

function We_Working() {
	return (
		<>
			<Container fluid className='We_Working_' style={{ maxWidth: '1600px', margin: '0px auto 150px', }}>
				<Row className='We_Working_' style={{}}>
					<h2 className='We_Working_' style={{ fontSize: '42px', textAlign: 'center', marginBottom: '50px', }}>Как мы работаем</h2>
					<Col className='' style={{ textAlign: 'center', }}>



						{/* <Col className='' style={{ maxWidth: '910px', }}>
							<Image src={Unsplash} alt='Unsplash!' className='' style={{}} />
						</Col> */}
						<Button className='We_Working_button' style={{ maxWidth: '230px', color: '#21B24A', border: "2px solid #21B24A", padding: '21px 40px', backgroundColor: '#e5e5e5', }}>Оформить заказ</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default We_Working;