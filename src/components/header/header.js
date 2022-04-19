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
				<div className="header_text">
					<h1 className="headet_text_title">Мягкие окна под ключ<span className="spanColor"> от 1 250 руб/м2</span></h1>
				</div>
				<div className="header_Icon">
					<div className="header_Icon_Block">
						<Icon className="header_Icon_Check" path={mdiCheck} />
						<span className="header_Icon_span">Производим монтаж в течении 1 дня</span>
					</div>
					<div className="header_Icon_Block">
						<Icon className="header_Icon_Check" path={mdiCheck} />
						<span className="header_Icon_span">Срок производства рассчитывается индивидуально для каждого заказчика</span>
					</div>
				</div>
				<Button className="header_Calculate">Рассчитать стоимость</Button>
				<img className="SHukaturka" src={SHukaturka} />
			</div>
		</>
	)
}

export default Header