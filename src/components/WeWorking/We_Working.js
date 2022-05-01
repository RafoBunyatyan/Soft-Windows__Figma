import React from "react";
import './We_Working.css';
import { Col, Container, Row, Button, Carousel, Image, } from "react-bootstrap";
import Unsplash from '../../assets/images/unsplash.png';

function We_Working() {
	return (
		<>
			<Container fluid className='We_Working_container' style={{ maxWidth: '1600px', margin: '0px auto 150px', }}>
				<Row>
					<h2 className='We_Working_title' style={{ fontSize: '42px', textAlign: 'center', marginBottom: '50px', }}>Как мы работаем</h2>
					<Col className='We_Working_block' style={{}}>
						{/* <Col className='We_Working_block_' style={{}}></Col>  */}
						<Carousel variant="dark">
							<Carousel.Item>
								<Col className='We_Working_Item' style={{ display: 'flex', flexDirection: 'row-reverse', margin: 'auto 80px', alignItems: 'center', }}>
									<Image src={Unsplash} alt="Unsplash!" className="We_Working_img" />
									<Carousel.Caption style={{ color: '#5B5B5B', }}>
										<Col className='We_Working_Caption ' style={{ margin: '65px 30px 60px 60px', }}>
											<h3 className='We_Working_setTitle' style={{ fontSize: '24px', }}>Замер объекта:</h3>
											<p className='We_Working_text' style={{ fontSize: '18px', }}>Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.</p>
										</Col>
									</Carousel.Caption>
								</Col>
							</Carousel.Item>
							{/* <Carousel.Item>
								<Col  className='We_Working_Item' style={{ display: 'flex', flexDirection: 'row-reverse', margin: 'auto 80px', alignItems: 'center', }}>
									<Image src={Unsplash} alt="Unsplash!" className="We_Working_img" />
								<Carousel.Caption style={{ color: '#5B5B5B', width: '50%', }}>
									<Col className='We_Working_Caption' style={{  margin: '35px 0px 35px 60px', }}>
										<h3 className='We_Working_setTitle' style={{ fontSize: '24px', }}>Замер объекта:</h3>
										<p className='We_Working_text' style={{ fontSize: '18px', }}>Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.</p>
									</Col>
								</Carousel.Caption>
									</Col>
							</Carousel.Item>
							<Carousel.Item>
								<Col  className='We_Working_Item' style={{ display: 'flex', flexDirection: 'row-reverse', margin: 'auto 80px', alignItems: 'center', }}>
									<Image src={Unsplash} alt="Unsplash!" className="We_Working_img" />
								<Carousel.Caption style={{ color: '#5B5B5B',  width: '50%', }}>
									<Col className='We_Working_Caption' style={{  margin: '35px  0px 35px 60px', }}>
										<h3 className='We_Working_setTitle' style={{ fontSize: '24px', }}>Замер объекта:</h3>
										<p className='We_Working_text' style={{ fontSize: '18px', }}>Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.</p>
									</Col>
								</Carousel.Caption>
									</Col>
							</Carousel.Item> */}
						</Carousel>
						<Col className='We_Working_block_button' style={{ textAlign: 'center', marginTop: '50px', }}>
							<Button className='We_Working_button' style={{ color: '#21B24A', border: "2px solid #21B24A", padding: '21px 53px', backgroundColor: '#e5e5e5', }}>Оформить заказ</Button>
						</Col>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default We_Working;