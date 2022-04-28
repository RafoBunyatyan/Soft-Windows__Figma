import React from "react";
import "./Our_Advantages.css";
import Frame from '../../assets/images/Frame.png'
import Frame1 from '../../assets/images/Frame_1.png'
import Frame2 from '../../assets/images/Frame_2.png'
import Frame3 from '../../assets/images/Frame_3.png'
import Frame4 from '../../assets/images/Frame_4.png'
import Frame5 from '../../assets/images/Frame_5.png'
import { Col, Container, Row, Image } from "react-bootstrap";

function Our_Advantages() {
	return (
		<>
			<Container fluid className='' style={{ margin: '110px auto', padding: '0', maxWidth: '1600px', }}>
				<Row className='' style={{ maxWidth: '1600px', margin: '0 auto', }}>
					<h2 className='article_ourTitle' style={{ fontSize: '42px', color: '#463B3B', display: 'flex', color: 'rgb(70, 59, 59)', alignItems: 'center', flexDirection: 'column', marginBottom: '3.1rem', }}>
						Наши преимущества
					</h2>
					<Col lg={12} className='' style={{ display: 'flex', flexWrap: 'wrap', padding: '0', justifyContent: 'center', }}>
						<Col md={4} className='article_container'>
							<Image fluid className='' src={Frame} alt='Frame!' style={{ margin: '38px 0px 20px', }} />
							<h4 className='article_ourSub_Title' style={{ fontSize: '25px', marginBottom: '0.5rem', }}>Большой срок службы</h4>
							<p className='article_our' style={{ maxWidth: '294px', }}>Срок службы составляет 10 лет, при соблюдении правил эксплуатации.</p>
						</Col>
						<Col md={4} className='article_container'>
							<Image fluid className='' src={Frame1} alt='Frame1!' style={{ margin: '38px 0px 20px', }} />
							<h4 className='article_ourSub_Title' style={{ fontSize: '25px', marginBottom: '0.5rem', }}>Простой монтаж</h4>
							<p className='article_our' style={{ maxWidth: '294px', }}>Мы проведём инструктаж по установке, если хотите выполнить монтаж самостоятельно.</p>
						</Col>
						<Col md={4} className='article_container'>
							<Image fluid className='' src={Frame2} alt='Frame2!' style={{ margin: '38px 0px 20px', }} />
							<h4 className='article_ourSub_Title' style={{ fontSize: '25px', marginBottom: '0.5rem', }}>Очень быстро</h4>
							<p className='article_our' style={{ maxWidth: '294px', }}>Мы работаем 24/7, поэтому ваш заказ будет выполнен и смонтирован в кратчайшие сроки!</p>
						</Col>
					</Col>
					<Col lg={12} className='' style={{ display: 'flex', flexWrap: 'wrap', padding: '0', justifyContent: 'center', }}>
						<Col md={4} className='article_container'>
							<Image fluid className='' src={Frame3} alt='Frame3!' style={{ margin: '38px 0px 20px', }} />
							<h4 className='article_ourSub_Title' style={{ fontSize: '25px', marginBottom: '0.5rem', }}>Лучшие пленки</h4>
							<p className='article_our' style={{ maxWidth: '310px', }}>Мы не экономим на ваших окнах и используем только лучшие всепогодные пленки!</p>
						</Col>
						<Col md={4} className='article_container'>
							<Image fluid className='' src={Frame4} alt='Frame4!' style={{ margin: '38px 0px 20px', }} />
							<h4 className='article_ourSub_Title' style={{ fontSize: '25px', marginBottom: '0.5rem', }}>Любые варианты окантовки</h4>
							<p className='article_our' style={{ maxWidth: '310px', }}>Немецкая ткань ПВХ в десяти расцветках («Стандарт»). С нами надёжно и практично!</p>
						</Col>
						<Col md={4} className='article_container'>
							<Image fluid className='' src={Frame5} alt='Frame5!' style={{ margin: '38px 0px 20px', }} />
							<h4 className='article_ourSub_Title' style={{ fontSize: '25px', marginBottom: '0.5rem', }}>Прочные москитные сетки</h4>
							<p className='article_our' style={{ maxWidth: '310px', }}>Мы используем только прочнейшие москитные сетки, выдерживающие очень большие нагрузки.</p>
						</Col>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Our_Advantages;