import React from "react";
import './Discuss_Project.css';
import { Container, Col, Row, } from "react-bootstrap";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

function Discuss_Project() {
	return (
		<>
			<Container fluid className='Discuss_Project_container' style={{ maxWidth: '1600px', margin: '0 auto 150px', }}>
				<Row>
					<Col className='Discuss_Project_about' style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around', }}>
						<Col style={{ maxWidth: '548px', }}>
							<h2 className='Discuss_Project_title' style={{ fontSize: '42px', marginBottom: '50px', }}>Обсудим проект?</h2>
							<p className='Discuss_Project_text' style={{ fontSize: '18px', margin: '0', }}>Опишите Вашу задачу и отправьте нам заявку. Мы просчитаем бюджет, подберем инструменты и составим план работ по Вашему проекту и свяжемся с Вами в ближайшее время.</p>
						</Col>
						<Col className='Discuss_Project_block' style={{ margin: '50px', width: '100%', maxWidth: '470px', }}>
							<Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" className='Discuss_Project_box' style={{ display: 'flex', flexFlow: 'column wrap', alignItems: 'flex-start', alignContent: 'center', }}>
								<TextField id="standard-basic" label="Имя" variant="standard" type="text" />
								<TextField id="standard-basic" label="Электронная почта" variant="standard" type="email" />
								<TextField id="standard-basic" label="Номер телефона" variant="standard" type="tel" />
								<TextField id="standard-basic" label="Пару слов о Вашем проекте" variant="standard" type="text" />
								<Box sx={{ display: 'flex' }}>
									<FormControl required component="fieldset" sx={{ m: 3 }} variant="standard">
										<FormControlLabel label="Я согласен(на) на обработку персональных данных" className='Discuss_Project_label' style={{ width: '400px', }} control={<Checkbox />} />
									</FormControl>
								</Box>
								<Button variant="contained" className='Discuss_Project_button' style={{ width: '470px', padding: '17px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', border: '1px solid #21B24A', backgroundColor: '#21B24A', color: '#fff', }}>Отправить заявку</Button>
							</Box>
						</Col>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Discuss_Project;

