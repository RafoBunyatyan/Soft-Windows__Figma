import React from "react";
import './We_Working.css';
import { Col, Container, Row, Carousel, Image, } from "react-bootstrap";
import Unsplash from '../../assets/images/unsplash.png';
import Товары_для from '../../assets/images/Товары_для_дома.png';
import Товары_для_2 from '../../assets/images/Товары_для_2.jpg';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const steps = ['Оставляете заявку', 'Замер объекта', 'Производим', 'Доставка и монтаж', 'Результат'];

function We_Working() {
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState({});

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	// const isLastStep = () => {
	// 	return activeStep === totalSteps() - 1;
	// };

	// const handleNext = () => {
	// 	const newActiveStep =	isLastStep() && !allStepsCompleted()	?	steps.findIndex((step, i) => !(i in completed))	: activeStep + 1;
	// 	setActiveStep(newActiveStep);
	// };

	// const handleBack = () => {
	// 	setActiveStep((prevActiveStep) => prevActiveStep - 1);
	// };

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		// handleNext();
	};

	const handleStep = (step) => () => {
		setActiveStep(step);
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted({});
	};

	return (
		<>
			<Container fluid className='We_Working_container' style={{ maxWidth: '1600px', margin: '0px auto 150px', }}>
				<Row>
					<h2 className='We_Working_title' style={{ fontSize: '42px', textAlign: 'center', marginBottom: '50px', }}>Как мы работаем</h2>
					<Box sx={{ width: '100%', display: 'flex', alignContent: 'space-around', flexDirection: 'column', }}>
						<Stepper nonLinear activeStep={activeStep} style={{ fontSize: '20px', justifyContent: 'center', }}>
							{steps.map((label, index) => (
								<Step key={label} completed={completed[index]}>
									<StepButton color="inherit" onClick={handleStep(index)}>{label}</StepButton>
								</Step>
							))}
						</Stepper>
						<div>
							{allStepsCompleted() ? (
								<React.Fragment>
									{/* <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography> */}
									<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
										<Box sx={{ flex: '1 1 auto' }} />
										<Button onClick={handleReset}>Reset</Button>
									</Box>
								</React.Fragment>
							) : (
								<React.Fragment>
									{/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
									<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
										{/* <Button		color="inherit"	disabled={activeStep === 0}	onClick={handleBack}	sx={{ mr: 1 }}	>	Back	</Button> */}
										<Box sx={{ flex: '1 1 auto' }} />
										{/* <Button onClick={handleNext} sx={{ mr: 1 }}>	Next	</Button> */}
										{activeStep !== steps.length &&
											(completed[activeStep] ? (
												<Typography variant="caption" sx={{ display: 'inline-block' }}>
													Step {activeStep + 1} already completed
												</Typography>
											) : (
												<Button onClick={handleComplete}>
													{completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}</Button>
											))}
									</Box>
								</React.Fragment>
							)}
						</div>
					</Box>
					<Carousel variant="dark">
						<Carousel.Item>
							<Col className='We_Working_Item' style={{ display: 'flex', flexDirection: 'row-reverse', margin: 'auto 60px', alignItems: 'center', justifyContent: 'space-between', }}>
								<Image src={Unsplash} alt="Unsplash!" className="We_Working_img" style={{ maxWidth: '420px', }} />
								<Carousel.Caption style={{ color: '#5B5B5B', }}>
									<Col className='We_Working_Caption ' style={{ margin: '65px 30px 60px 60px', maxWidth: '640px', }}>
										<h3 className='We_Working_setTitle' style={{ fontSize: '24px', }}>Замер объекта:</h3>
										<p className='We_Working_text' style={{ fontSize: '18px', }}>Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.</p>
									</Col>
								</Carousel.Caption>
							</Col>
						</Carousel.Item>
						<Carousel.Item>
							<Col className='We_Working_Item' style={{ display: 'flex', flexDirection: 'row-reverse', margin: 'auto 60px', alignItems: 'center', justifyContent: 'space-between', }}>
								<Image src={Товары_для} alt="Товары_для!" className="We_Working_img" style={{ maxWidth: '420px', }} />
								<Carousel.Caption style={{ color: '#5B5B5B', }}>
									<Col className='We_Working_Caption' style={{ margin: '65px 30px 60px 60px', maxWidth: '640px', }}>
										<h3 className='We_Working_setTitle' style={{ fontSize: '24px', }}>Замер объекта:</h3>
										<p className='We_Working_text' style={{ fontSize: '18px', }}>Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.</p>
									</Col>
								</Carousel.Caption>
							</Col>
						</Carousel.Item>
						<Carousel.Item>
							<Col className='We_Working_Item' style={{ display: 'flex', flexDirection: 'row-reverse', margin: 'auto 60px', alignItems: 'center', justifyContent: 'space-between', }}>
								<Image src={Товары_для_2} alt="Товары_для_2!" className="We_Working_img" style={{ maxWidth: '420px', }} />
								<Carousel.Caption style={{ color: '#5B5B5B', }}>
									<Col className='We_Working_Caption' style={{ margin: '65px 30px 60px 60px', maxWidth: '640px', }}>
										<h3 className='We_Working_setTitle' style={{ fontSize: '24px', }}>Замер объекта:</h3>
										<p className='We_Working_text' style={{ fontSize: '18px', }}>Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.</p>
									</Col>
								</Carousel.Caption>
							</Col>
						</Carousel.Item>
					</Carousel>
					<Col className='We_Working_block_button' style={{ textAlign: 'center', marginTop: '50px', }}>
						<Button className='We_Working_button' style={{ color: '#21B24A', border: "2px solid #21B24A", padding: '21px 65px', backgroundColor: '#e5e5e5', }}>Оформить заказ</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default We_Working;