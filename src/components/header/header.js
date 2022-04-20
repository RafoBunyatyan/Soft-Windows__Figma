import React from "react"
import "./Header.css"
import SHukaturka from "../../assets/images/shukaturka-min 1.png"
import { Button, } from "react-bootstrap"
import Icon, { Stack } from '@mdi/react';
import { mdiCheck } from '@mdi/js';


function Header() {
	return (
		<>
			<div className="header">
				<img className="header_img" src={SHukaturka} />
				<div className="header_about">
					<h1 className="headet_text_title">Мягкие окна под ключ <br />
						<span className="headet_text_span"> от 1 250 руб/м2</span>
					</h1>
					<div className="header_about_Block about_icon">
						<Icon className="header_Icon_Check" path={mdiCheck} />
						<span className="header_Icon_span">Производим монтаж в течении 1 дня</span>
					</div>
					<div className="header_about_Block about_icon">
						<Icon className="header_Icon_Check" path={mdiCheck} />
						<span className="header_Icon_span">Срок производства рассчитывается<br /> индивидуально для каждого заказчика</span>
					</div>
					<Button className="header_about_Calculate">Рассчитать стоимость</Button>
				</div>
			</div>
		</>
	)
}

export default Header