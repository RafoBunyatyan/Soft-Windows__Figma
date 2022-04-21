import React from "react"
import "./Aside.css"
import { Button } from "react-bootstrap";
import Icon, { Stack } from '@mdi/react';
import { mdiCheck } from '@mdi/js';

function Aside() {
	return (
		<>
			<div className="aside">
				<div className="aside_title">
					<span className="aside_title_big">Купить мягкие окна</span>
					<span className="aside_title_text">Мягкие окна ПВХ - это отличная альтернатива классическому остеклению. Простота монтажа, долговечность, недорогая стоимость мягких окон… У нас можно купить шторы из гибкого ПВХ недорого и без ущерба качеству.</span>
				</div>
				<div className="aside_information">
					<div className="aside_information_grup">
						<span className="informationGrup_title">Стандарт</span>
						<hr className="informationGrup_hr" />
						<span className="informationGrup_suma">от 1 100 руб/м2</span>
						<div className="informationGrup_item">
							<Icon className="item_Icon" path={mdiCheck} />
							<span className="item_text">Пленка Китай 700 мкм до -20</span>
							<Icon className="item_Icon" path={mdiCheck} />
							<span className="item_text">C0 Окантовка ОКСФОРД Премиум</span>
							<Icon className="item_Icon" path={mdiCheck} />
							<span className="item_text">Комплект креплений через <br /> каждые 40 см</span>
						</div>
						<Button>Оформить заказ</Button>
					</div>
					<div className="aside_information_grup">
						<span className="informationGrup_title">Премиум</span>
						<hr className="informationGrup_hr" />
						<span className="informationGrup_suma">от 1 150 руб/м2</span>
						<div className="informationGrup_item">
							<Icon className="item_Icon" path={mdiCheck} />
							<span className="item_text">Пленка Ю. КОрея 700 мкм до -40</span>
							<Icon className="item_Icon" path={mdiCheck} />
							<span className="item_text">C0 Окантовка тканью ОКСФОРД Премиум или ПВХ (выбор из цветов по каталогу)</span>
							<Icon className="item_Icon" path={mdiCheck} />
							<span className="item_text">Комплект креплений через каждые 40 см</span>
						</div>
						<Button>Оформить заказ</Button>
					</div>
					<div className="aside_information_grup">
						<span className="informationGrup_title">Под ключ</span>
						<hr className="informationGrup_hr" />
						<span className="informationGrup_suma">от 1 550 руб/м2</span>
						<div className="informationGrup_item">
							<Icon className="item_Icon" path={mdiCheck} />
							<span className="item_text">В комплектации «Стандарт» включая замер, доставку и монтаж при заказе более 20 м2 и установке в деревянное плоское основание</span>
						</div>
						<Button>Оформить заказ</Button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Aside