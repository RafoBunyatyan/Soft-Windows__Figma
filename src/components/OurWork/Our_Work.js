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
			<Container fluid className='' style={{ maxWidth: '1600px', margin: '0 auto 150px', }}>
				<Row className='' style={{}}>
					<h2 className='' style={{ font: '42px', textAlign: 'center', marginBottom: '50px', }}>Наши работы</h2>
					<Col className='' style={{}}>
						<Box sx={{ width: '100%', borderBottom: 1, borderColor: '#cdd3e3', marginBottom: '40px', }}>
							<Tabs value={value} onChange={handleChange} centered>
								<Tab label="Все" className='section_subTitle' style={{ color: '#989898', fontSize: '25px', }} />
								<Tab label="Беседки" className='section_subTitle' style={{ color: '#989898', fontSize: '25px', }} />
								<Tab label="Террасы" className='section_subTitle' style={{ color: '#989898', fontSize: '25px', }} />
								<Tab label="Веранды" className='section_subTitle' style={{ color: '#989898', fontSize: '25px', }} />
								<Tab label="Кафе" className='section_subTitle' style={{ color: '#989898', fontSize: '25px', }} />
							</Tabs>
						</Box>
						<Carousel variant="dark">
							<Carousel.Item>
								<Col className='Our_Work_' style={{ display: 'flex', flexDirection: 'row-reverse', margin: 'auto 80px', alignItems: 'center', justifyContent: 'space-between', }}>
									<Image src={Our_Work_0} alt="Our_Work_0!" className="Our_Work_" style={{ maxWidth: '420px', }} />
									<Carousel.Caption style={{ color: '#5B5B5B', }}>
										<Col className='Our_Work_' style={{ margin: '65px 30px 60px 60px', maxWidth: '640px', }}>
											<h3 className='Our_Work_' style={{ fontSize: '24px', }}>Мягкие окна для беседки в Серпузовском районе</h3>
											<p className='Our_Work_' style={{ fontSize: '18px', }}>Подробнее</p>
										</Col>
									</Carousel.Caption>
								</Col>
								<Col className='Our_Work_' style={{ display: 'flex', flexDirection: 'row-reverse', margin: 'auto 80px', alignItems: 'center', justifyContent: 'space-between', }}>
									<Image src={Our_Work_1} alt="Our_Work_1!" className="Our_Work_" style={{ maxWidth: '420px', }} />
									<Carousel.Caption style={{ color: '#5B5B5B', }}>
										<Col className='Our_Work_' style={{ margin: '65px 30px 60px 60px', maxWidth: '640px', }}>
											<h3 className='Our_Work_' style={{ fontSize: '24px', }}>Мягкие окна для беседки в Жуковском</h3>
											<p className='Our_Work_' style={{ fontSize: '18px', }}>Подробнее</p>
										</Col>
									</Carousel.Caption>
								</Col>
								<Col className='Our_Work_' style={{ display: 'flex', flexDirection: 'row-reverse', margin: 'auto 80px', alignItems: 'center', justifyContent: 'space-between', }}>
									<Image src={Our_Work_2} alt="Our_Work_2!" className="Our_Work_" style={{ maxWidth: '420px', }} />
									<Carousel.Caption style={{ color: '#5B5B5B', }}>
										<Col className='Our_Work_' style={{ margin: '65px 30px 60px 60px', maxWidth: '640px', }}>
											<h3 className='Our_Work_' style={{ fontSize: '24px', }}>Мягкие окна для беседки в Химках</h3>
											<p className='Our_Work_' style={{ fontSize: '18px', }}>Подробнее</p>
										</Col>
									</Carousel.Caption>
								</Col>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Our_Work;