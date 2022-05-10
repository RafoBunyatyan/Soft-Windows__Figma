import React from "react";
import "./OurAdvantages.css";
import Frame from '../../assets/images/Frame.png';
import Frame1 from '../../assets/images/Frame_1.png';
import Frame2 from '../../assets/images/Frame_2.png';
import Frame3 from '../../assets/images/Frame_3.png';
import Frame4 from '../../assets/images/Frame_4.png';
import Frame5 from '../../assets/images/Frame_5.png';
import { Col, Container, Row, Image } from "react-bootstrap";

function OurAdvantages() {
	return (
		<>
			<Container fluid className='ourAdvantages__container' style={{ maxWidth: '1600px', margin: '110 auto', }}>
				<Row>
					<h2 className='ourAdvantages__title' style={{ fontSize: '42px', color: '#463B3B', display: 'flex', color: 'rgb(70, 59, 59)', alignItems: 'center', flexDirection: 'column', marginBottom: '3.1rem', }}>Наши преимущества</h2>
					<Col lg={12} style={{ display: 'flex', flexWrap: 'wrap', padding: '0', justifyContent: 'space-around', }}>
						<Col lg={6} style={{ display: 'flex', flexFlow: 'column wrap', alignItems: 'center', maxWidth: '420px', margin: '15px', textAlign: 'center', }}>
							<Image fluid src={Frame} alt='Frame!' style={{ margin: '38px 0px 20px', }} />
							<h4 className='ourAdvantages__subTitle' style={{ fontSize: '25px', marginBottom: '0.5rem', }}>Большой срок службы</h4>
							<p className='ourAdvantages__text' style={{ fontSize: '18px', textAlign: 'center', margin: '0px auto 34px', maxWidth: '294px', }}>Срок службы составляет 10 лет, при соблюдении правил эксплуатации.</p>
						</Col>
						<Col lg={6} style={{ display: 'flex', flexFlow: 'column wrap', alignItems: 'center', maxWidth: '420px', margin: '15px', textAlign: 'center', }}>
							<Image fluid src={Frame1} alt='Frame1!' style={{ margin: '38px 0px 20px', }} />
							<h4 className='ourAdvantages__subTitle' style={{ fontSize: '25px', marginBottom: '0.5rem', }}>Простой монтаж</h4>
							<p className='ourAdvantages__text' style={{ fontSize: '18px', textAlign: 'center', margin: '0px auto 34px', maxWidth: '294px', }}>Мы проведём инструктаж по установке, если хотите выполнить монтаж самостоятельно.</p>
						</Col>
						<Col lg={6} style={{ display: 'flex', flexFlow: 'column wrap', alignItems: 'center', maxWidth: '420px', margin: '15px', textAlign: 'center', }}>
							<Image fluid src={Frame2} alt='Frame2!' style={{ margin: '38px 0px 20px', }} />
							<h4 className='ourAdvantages__subTitle' style={{ fontSize: '25px', marginBottom: '0.5rem', }}>Очень быстро</h4>
							<p className='ourAdvantages__text' style={{ fontSize: '18px', textAlign: 'center', margin: '0px auto 34px', maxWidth: '294px', }}>Мы работаем 24/7, поэтому ваш заказ будет выполнен и смонтирован в кратчайшие сроки!</p>
						</Col>
					</Col>
					<Col lg={12} style={{ display: 'flex', flexWrap: 'wrap', padding: '0', justifyContent: 'space-around', }}>
						<Col lg={6} style={{ display: 'flex', flexFlow: 'column wrap', alignItems: 'center', maxWidth: '420px', margin: '15px', textAlign: 'center', }}>
							<Image fluid src={Frame3} alt='Frame3!' style={{ margin: '38px 0px 20px', }} />
							<h4 className='ourAdvantages__subTitle' style={{ fontSize: '25px', marginBottom: '0.5rem', }}>Лучшие пленки</h4>
							<p className='ourAdvantages__text' style={{ fontSize: '18px', textAlign: 'center', margin: '0px auto 34px', maxWidth: '310px', }}>Мы не экономим на ваших окнах и используем только лучшие всепогодные пленки!</p>
						</Col>
						<Col lg={6} style={{ display: 'flex', flexFlow: 'column wrap', alignItems: 'center', maxWidth: '420px', margin: '15px', textAlign: 'center', }}>
							<Image fluid src={Frame4} alt='Frame4!' style={{ margin: '38px 0px 20px', }} />
							<h4 className='ourAdvantages__subTitle' style={{ fontSize: '25px', marginBottom: '0.5rem', }}>Любые варианты окантовки</h4>
							<p className='ourAdvantages__text' style={{ fontSize: '18px', textAlign: 'center', margin: '0px auto 34px', maxWidth: '310px', }}> Немецкая ткань ПВХ в десяти расцветках («Стандарт»). С нами надёжно и практично!</p>
						</Col>
						<Col lg={6} style={{ display: 'flex', flexFlow: 'column wrap', alignItems: 'center', maxWidth: '420px', margin: '15px', textAlign: 'center', }}>
							<Image fluid src={Frame5} alt='Frame5!' style={{ margin: '38px 0px 20px', }} />
							<h4 className='ourAdvantages__subTitle' style={{ fontSize: '25px', marginBottom: '0.5rem', }}>Прочные москитные сетки</h4>
							<p className='ourAdvantages__text' style={{ fontSize: '18px', textAlign: 'center', margin: '0px auto 34px', maxWidth: '310px', }}>Мы используем только прочнейшие москитные сетки, выдерживающие очень большие нагрузки.</p>
						</Col>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default OurAdvantages;