import React from "react";
import './Our_Work.css';
import { Col, Container, Row, Carousel, Image, } from "react-bootstrap";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Our_Work_0 from '../../assets/images/Rectangle.png';
import Our_Work_1 from '../../assets/images/Rectangle_1.png';
import Our_Work_2 from '../../assets/images/Rectangle_2.png';

function Our_Work() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Container fluid className='Our_Work_container' style={{ maxWidth: '1600px', margin: '0 auto 150px', }}>
				<Row>
					<h2 className='Our_Work_title' style={{ fontSize: '42px', textAlign: 'center', marginBottom: '50px', }}>Наши работы</h2>
					<Box sx={{ width: '100%', borderBottom: 1, borderColor: '#cdd3e3', marginBottom: '40px', }}>
						<Tabs value={value} onChange={handleChange} centered>
							<Tab label="Все" className='Our_Work_subTitle' style={{ color: '#989898', fontSize: '25px', }} />
							<Tab label="Беседки" className='Our_Work_subTitle' style={{ color: '#989898', fontSize: '25px', }} />
							<Tab label="Террасы" className='Our_Work_subTitle' style={{ color: '#989898', fontSize: '25px', }} />
							<Tab label="Веранды" className='Our_Work_subTitle' style={{ color: '#989898', fontSize: '25px', }} />
							<Tab label="Кафе" className='Our_Work_subTitle' style={{ color: '#989898', fontSize: '25px', }} />
						</Tabs>
					</Box>
					<Carousel variant="dark">
						<Carousel.Item style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', }}>
							<Carousel.Caption className='Our_Work_caption' style={{ color: '#5B5B5B', paddingLeft: '2.2rem', }}>
								<Col>
									<Image src={Our_Work_0} alt="Our_Work_0!" style={{ width: '100%', }} />
									<h3 className='Our_Work_setTitle' style={{ fontSize: '24px', maxWidth: '304px', }}>Мягкие окна для беседки в Серпузовском районе</h3>
									<p className='Our_Work_text' style={{ color: '#21B24A', margin: '0', }}>Подробнее</p>
								</Col>
							</Carousel.Caption>
							<Carousel.Caption className='Our_Work_caption' style={{ color: '#5B5B5B', margin: '0rem 2rem', }}>
								<Col>
									<Image src={Our_Work_1} alt="Our_Work_1!" className="Our_Work_img" style={{ width: '100%', }} />
									<h3 className='Our_Work_setTitle' style={{ fontSize: '24px', maxWidth: '304px', }}>Мягкие окна для беседки в Жуковском</h3>
									<p className='Our_Work_text' style={{ color: '#21B24A', margin: '0', }}>Подробнее</p>
								</Col>
							</Carousel.Caption>
							<Carousel.Caption className='Our_Work_caption' style={{ color: '#5B5B5B', paddingRight: '2.2rem', }}>
								<Col>
									<Image src={Our_Work_2} alt="Our_Work_2!" style={{ width: '100%', }} />
									<h3 className='Our_Work_setTitle' style={{ fontSize: '24px', maxWidth: '304px', }}>Мягкие окна для беседки в Химках</h3>
									<p className='Our_Work_text' style={{ color: '#21B24A', margin: '0', }}>Подробнее</p>
								</Col>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Row>
			</Container>
		</>
	);
};

export default Our_Work;