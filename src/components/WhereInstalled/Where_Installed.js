import React from "react";
import './Where_Installed.css';
import { Col, Container, Row, Image, } from "react-bootstrap";
import Rectangle from '../../assets/images/Rectangle_73.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Where_Installed() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Container fluid className='Where_Installed_about' style={{ margin: '150px auto 150px', maxWidth: '1600px', }}>
				<Row>
					<h2 className='Where_Installed_title' style={{ fontSize: '42px', textAlign: 'center', }}>Куда устанавливаются мягкие окна</h2>
					<Col className='Where_Installed_container' style={{ paddingLeft: '1.5rem', marginTop: '40px', display: 'flex', position: 'relative', }}>
						<Box sx={{ flexGrow: 1, display: 'flex', marginRight: 'auto', maxWidth: '194px', }}>
							<Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example">
								<Tab label="Для беседок" className='Where_Installed_tab' style={{ color: '#989898', fontSize: '23px', padding: '12px 5px 12px 18px', }} />
								<Tab label="Для террас" className='Where_Installed_tab' style={{ color: '#989898', fontSize: '23px', padding: '12px 5px 12px 18px', }} />
								<Tab label="Для веранд" className='Where_Installed_tab' style={{ color: '#989898', fontSize: '23px', padding: '12px 5px 12px 18px', }} />
								<Tab label="Для кафе" className='Where_Installed_tab' style={{ color: '#989898', fontSize: '23px', padding: '12px 5px 12px 18px', }} />
								<Tab label="Для навеса" className='Where_Installed_tab' style={{ color: '#989898', fontSize: '23px', padding: '12px 5px 12px 18px', }} />
							</Tabs>
						</Box>
						<Image fluid src={Rectangle} alt="Rectangle!" className='Where_Installed_img' />
						<Col className='Where_Installed_block_button' style={{ maxWidth: '756px', padding: '40px 30px', top: '32%', left: '32%', position: 'absolute', backgroundColor: '#e5e5e5', }}>
							<p className='Where_Installed_text' style={{ marginBottom: '20px', fontSize: '18px', }}>Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.</p>
							<Button className='Where_Installed_button' style={{ color: '#fff', backgroundColor: '#21B24A', padding: '21px 56px', border: '1px solid #21B34A', }}>Подробнее</Button>
						</Col>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Where_Installed;