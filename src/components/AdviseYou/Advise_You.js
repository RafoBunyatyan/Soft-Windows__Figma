import React from "react";
import './Advise_You.css';
import { Col, Container, Row, Image } from "react-bootstrap";
import Worker from '../../assets/images/image_14.png';
import Rectangle from '../../assets/images/Rectangle_3.png';
import Button from '@mui/material/Button';

function Advise_You() {
	return (
		<>
			<Container className='advise_container' style={{ width: '100%', maxWidth: '100%', margin: '100px auto 150px', }}>
				<Row>
					<Image src={Rectangle} alt='Rectangle!' className='advise_imgRectangle' style={{ height: '661px', }} />
					<Col className='advise_section' style={{ maxWidth: '1600px', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginTop: '-654px', }}>
						<Col style={{ marginLeft: '1rem', maxWidth: '512px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', }}>
							<h2 className='advise_title' style={{ fontSize: '42px', marginBottom: '20px', }}>Не можете выбрать? Мы вам подскажем!</h2>
							<p className='advise_text' style={{ fontSize: '18px', marginBottom: '25px', }}>Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании.</p>
							<Button className='advise_button' style={{ color: '#fff', marginTop: '25px', backgroundColor: '#21B24A', border: '1px solid #21B34A', padding: '17px 68px', }}>Написать нам</Button>
						</Col>
						<Image src={Worker} alt='Worker!' className='advise_imgWorker' />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Advise_You;