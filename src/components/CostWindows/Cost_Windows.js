import React, { useState } from "react";
import "./Cost_Windows.css";
import { Col, Container, Row, } from "react-bootstrap";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

function Cost_Windows() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Container fluid style={{ maxWidth: '1600px', padding: '0', }}>
				<Row style={{ display: 'flex', flexDirection: 'column', }}>
					<h2 className='section_title' style={{ fontSize: '42px', textAlign: 'center', }}>Стоимость мягких окон</h2>
					<Box sx={{ width: '100%', borderBottom: 1, borderColor: '#cdd3e3', }}>
						<Tabs value={value} onChange={handleChange} centered>
							<Tab label="Мягкие окона более 50 м²" className='section_subTitle' style={{ color: '#989898', fontSize: '25px', }} />
							<Tab label="Мягкие окона от 15 м² до 50 м²" className='section_subTitle' style={{ color: '#989898', fontSize: '25px', }} />
							<Tab label="Мягкие окона до 15 м²" className='section_subTitle' style={{ color: '#989898', fontSize: '25px', }} />
						</Tabs>
					</Box>
					<Col style={{ marginBottom: '50px', }}>
						<Col style={{ display: 'flex', justifyContent: 'space-between', margin: '25px 36px 24px 47px', flexWrap: 'wrap', }}>
							<h6 className='section_subBlock_title' style={{ fontSize: '24px', }}>Стандарт</h6>
							<span className='section_subBlock_text' style={{ fontSize: '24px', }}>1 150 руб/м2</span>
						</Col>
						<Col style={{ display: 'flex', justifyContent: 'space-between', margin: '25px 36px 24px 47px', flexWrap: 'wrap', }}>
							<h6 className='section_subBlock_title' style={{ fontSize: '24px', }}>Премимум</h6>
							<span className='section_subBlock_text' style={{ fontSize: '24px', }}>1 200 руб/м2</span>
						</Col>
						<Col style={{ display: 'flex', justifyContent: 'space-between', margin: '25px 36px 24px 47px', flexWrap: 'wrap', }}>
							<h6 className='section_subBlock_title' style={{ fontSize: '24px', }}>Люкс</h6>
							<span className='section_subBlock_text' style={{ fontSize: '24px', }}>1 350 руб/м2</span>
						</Col>
						<Col style={{ display: 'flex', justifyContent: 'space-between', margin: '25px 36px 24px 47px', flexWrap: 'wrap', }}>
							<h6 className='section_subBlock_title' style={{ fontSize: '24px', }}>Под ключ</h6>
							<span className='section_subBlock_text' style={{ fontSize: '24px', }}>1 550 руб/м2</span>
						</Col>
					</Col>
					<Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', }}>
						<Button className='section_button' style={{ padding: '21px 53px', backgroundColor: '#e5e5e5', border: '2px solid #21B24A', color: '#21B24A', }}> Оформить заказ</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Cost_Windows;