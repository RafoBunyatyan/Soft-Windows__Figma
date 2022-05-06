import React from "react";
import './Reviews.css';
import { Col, Container, Row, Carousel, Image } from "react-bootstrap";
import Vector from '../../assets/images/Vector.png';
import Group_436 from '../../assets/images/Group_436.png';

function Reviews() {
	return (
		<>
			<Container fluid className='Reviews_container' style={{ maxWidth: '1600px', margin: '0 auto 150px', }}>
				<Row>
					<h2 className='Reviews_title' style={{ fontSize: '42px', textAlign: 'center', marginBottom: '50px', }}>Отзывы</h2>
					<Carousel variant="dark">
						<Carousel.Item className='Reviews_about' style={{ display: 'flex', justifyContent: 'space-between', }}>
							<Carousel.Caption className='Reviews_caption' style={{ padding: '38px', marginLeft: '2rem', }}>
								<Image src={Vector} alt='Vector!' className='Reviews__Vectop VectopSize' style={{ width: '18px', height: '31px', }}></Image>
								<Image src={Vector} alt='Vector_1!' className='VectopSize' style={{ marginLeft: '1.75px', width: '18px', height: '31px', }}></Image>
								<p className='Reviews_text' style={{ fontSize: '18px', maxWidth: '565px', color: '#5B5B5B', margin: '18px auto 30px', }}>В последний момент перед новым годом поняли, что в праздники в беседке делать нечего. Все завалило снегом и он не перестает идти. Вызвали бригаду по установке мягких окон и не прогадала. Большое спасибо за быструю и своевременную работу.</p>
								<h3 className='Reviews_SubTitle' style={{ fontSize: '24px', }}>Нина Петровна</h3>
							</Carousel.Caption>
							<Carousel.Caption className='Reviews_caption' style={{ padding: '38px', marginLeft: '30px', marginRight: '1rem', }}>
								<Image src={Vector} alt='Vector_2!' className='Reviews__Vectop_1 VectopSize' style={{ width: '18px', height: '31px', }}></Image>
								<Image src={Vector} alt='Vector_3!' className='VectopSize' style={{ marginLeft: '1.75px', width: '18px', height: '31px', }}></Image>
								<p className='Reviews_text' style={{ fontSize: '18px', maxWidth: '565px', color: '#5B5B5B', margin: '18px auto 30px', }}>В последний момент перед новым годом поняли, что в праздники в беседке делать нечего. Все завалило снегом и он не перестает идти. Вызвали бригаду по установке мягких окон и не прогадала. Большое спасибо за быструю и своевременную работу.</p>
								<h3 className='Reviews_SubTitle' style={{ fontSize: '24px', }}>Нина Петровна</h3>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
					<Col style={{ display: 'flex', justifyContent: 'center', }}>
						<Image src={Group_436} alt='Group_436!' style={{ marginTop: '25px', backgroundColor: '#f7f0f0', }} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Reviews;