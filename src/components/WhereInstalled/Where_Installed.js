import React from "react";
import './Where_Installed.css';
// import { Col, Container, Row, Button, Image } from "react-bootstrap";
// import Rectangle from '../../assets/images/Rectangle_73.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// function Where_Installed() {
// 	return (
// 		<>
// 			<Container className='' style={{}}>
// 				<Row className='' style={{}}>
// 					<h2 className='' style={{ fontSize: '42px', }}>Куда устанавливаются мягкие окна</h2>
// 					<Col className='' style={{ marginTop: '40px', }}>


// 					</Col>
// 					<Col className='' style={{}}>
// 						<Image src={Rectangle} alt="Rectangle!" className='' style={{ maxWidth: '870px', }} />
// 					</Col>
// 					<Col className='' style={{ maxWidth: '756px', filter: 'drop-shadow(0px 7.39344px 21.6116px rgba(154, 170, 207, 0.04))', padding: '40px 48px', }}>
// 						<p className='' style={{ marginBottom: '20px', fontSize: '18px', }}>Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.</p>
// 						<Button className='_button' style={{ backgroundColor: '#21B24A', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '21px 56px', border: '1px solid #21B34A', }}>Подробнее</Button>
// 					</Col>
// 				</Row>
// 			</Container>
// 		</>
// 	);
// };

// export default Where_Installed;

import PropTypes from 'prop-types';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

export default function VerticalTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ flexGrow: 1, bgcolor: '#e5e5e5', display: 'flex', maxWidth: '1600px', margin: '0 auto', }}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				sx={{}}
				className='' style={{}}
			>
				<Tab label="Для беседок" {...a11yProps(0)} className='' style={{ color: '#989898', }} />
				<Tab label="Для террас" {...a11yProps(1)} className='' style={{ color: '#989898', }} />
				<Tab label="Для веранд" {...a11yProps(2)} className='' style={{ color: '#989898', }} />
				<Tab label="Для кафе" {...a11yProps(3)} className='' style={{ color: '#989898', }} />
				<Tab label="Для навеса" {...a11yProps(4)} className='' style={{ color: '#989898', }} />
			</Tabs>
		</Box>
	);
}
