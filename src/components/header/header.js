import React from "react"
import "./Header.css"
import SHukaturka from "../../assets/images/shukaturka-min 1.png"
import { Button, } from "react-bootstrap"
import Icon, { Stack } from '@mdi/react';
import { mdiCheck } from '@mdi/js';


function Header() {
	return (
		<>
			<div className="">
				<img className="img" src={SHukaturka} />
				<div className="div">
					<h1>Мягкие окна в Серпухова под ключ <span className="span"> от 1 250 руб/м2</span></h1>
				</div>
				<div className="eee">
					<Icon className="icon" path={mdiCheck} />
					<span>Производим монтаж в течении 1 дня</span>
					<Icon className="icon" path={mdiCheck} />
					<span>Срок производства рассчитывается индивидуально для каждого заказчика</span>
				</div>
				<div className="">
					<Button className="button">Рассчитать стоимость</Button>
				</div>

			</div>

		</>
	)
}

export default Header