import React from "react";
import './Advise_You.css';
import { Col, Container, Row, Button, Image } from "react-bootstrap";
import Worker from '../../assets/images/image_14.png';
import Rectangle from '../../assets/images/Rectangle_3.png';

function Advise_You() {
	return (
		<>
			<Container className='advise_container' style={{ maxWidth: '1600px', }}>
				<Row className='advise_about' style={{ margin: '100px auto', maxWidth: '1600px', }}>
					<Image src={Rectangle} alt='Rectangle!' className='advise_imgRectangle' style={{ height: '661px', }} />
					<Col className='advise_section' style={{ display: 'flex', justifyContent: 'space-around', marginTop: '-654px', }}>
						<Col className='advise_block' style={{ maxWidth: '512px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', }}>
							<h2 className='advise_title' style={{ fontSize: '42px', marginBottom: '20px', }}>Не можете выбрать? Мы вам подскажем!</h2>
							<p className='advise_text' style={{ fontSize: '18px', marginBottom: '25px', }}>Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании.</p>
							<Button className='advise_button' style={{ marginTop: '25px', backgroundColor: '#21B24A', border: '1px solid #21B34A', padding: '17px 68px', }}>Написать нам</Button>
						</Col>
						<Image src={Worker} alt='Worker!' className='advise_imgWorker' style={{}} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Advise_You;