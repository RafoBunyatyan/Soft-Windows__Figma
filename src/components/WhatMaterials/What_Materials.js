import React from "react";
import './What_Materials.css';
import { Container, Row, CardGroup, Card, Col, } from "react-bootstrap";
import Москитная_сетка from '../../assets/images/Москитная_сетка.png';
import Карабин_89 from '../../assets/images/Карабин_89.png';
import Карабин_90 from '../../assets/images/Карабин_90.png';

function What_Materials() {
	return (
		<>
			<Container fluid className='Materials_container' style={{ margin: '0px auto 150px', maxWidth: '1600px', }}>
				<Row>
					<h2 className='Materials_title' style={{ fontSize: '42px', textAlign: 'center', marginBottom: '50px', }}>Какие материалы мы используем</h2>
					<CardGroup className="Materials_CardGrup" style={{ margin: '0rem 1rem', }}>
						<Card className='Materials_card' style={{ backgroundColor: '#e5e5e5', border: 'none', flexWrap: 'wrap', alignContent: 'center', }}>
							<Card.Img variant="top" src={Москитная_сетка} style={{ maxWidth: '420px', }} />
							<Card.Body>
								<Card.Title className='Materials_subTitle' style={{ fontSize: '24px', }}>Москитная сетка</Card.Title>
								<Card.Text style={{ color: '#21B24A', }}>Подробнее</Card.Text>
							</Card.Body>
						</Card>
						<Card className='Materials_card' style={{ backgroundColor: '#e5e5e5', border: 'none', margin: '0px 15px', flexWrap: 'wrap', alignContent: 'center', }}>
							<Card.Img variant="top" src={Карабин_89} style={{ maxWidth: '420px', }} />
							<Card.Body>
								<Card.Title className='Materials_subTitle' style={{ fontSize: '24px', }}>Карабин</Card.Title>
								<Card.Text style={{ color: '#21B24A', }}>Подробнее</Card.Text>
							</Card.Body>
						</Card>
						<Card className='Materials_card' style={{ backgroundColor: '#e5e5e5', border: 'none', flexWrap: 'wrap', alignContent: 'center', }}>
							<Card.Img variant="top" src={Карабин_90} style={{ maxWidth: '420px', }} />
							<Card.Body>
								<Card.Title className='Materials_subTitle' style={{ fontSize: '24px', }}>Карабин</Card.Title>
								<Card.Text style={{ color: '#21B24A', }}>Подробнее</Card.Text>
							</Card.Body>
						</Card>
					</CardGroup>
				</Row>
			</Container>
		</>
	);
};

export default What_Materials;