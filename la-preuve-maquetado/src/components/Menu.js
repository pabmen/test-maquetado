
import React from 'react';
import Data from '../data/locale_es.json';

import './Menu.scss';
const header = Data.header;

class Menu extends React.Component {

	render() {
		return (
			<div className="menu">
				<a href="/" className="menu__close header__mobile-menu--toggle"><img src={header.mobile_menu.close} alt={header.mobile_menu.close_caption}/></a>
				<a href="/" className="menu__logo"><img src={header.logo} alt=""/></a>
				<ul  className="menu__tools">
					{ header.toolbar.map(item => <li className={item.mobile_class}><a href="#"><img src={item.icon} alt={item.label}/></a></li>) }
				</ul>
				
				<ul className="menu__links">
					{ header.toolbar.map(item => <li><a href={item.url} className={item.class}>{item.label}</a></li>) }
				</ul>
			</div>
		)
	}
}

export default Menu;

