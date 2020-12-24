
import React from 'react';
import Menu from './Menu';
import Data from '../data/locale_es.json';

import './Header.scss';

function Header() {
	const logo = require('../assets/logo.svg');
	const header = Data.header;
	const navigation = Data.navigation;

	return (
		<header className="header text-center">
			<div className="constrain">
				<div className="relative">
					<div className="header__mobile-menu">
						<a href="#" className="header__mobile-menu--toggle">
							<img src={logo} alt={header.mobile_menu.caption}/>
						</a>
					</div>
					<Menu/>
					<h1>
						<a href="/"><img className="header__logo"src={header.logo} alt={header.title}/></a>
					</h1>
					<div className="header__toolbar">
						<ul>
							{
								header.toolbar.map( item => <li className={item.class}><a href="#"><img src={item.icon} alt={item.label} /></a></li> )
							}
						</ul>
					</div>
				</div>
				<nav className="header__topbar">
					<ul>
						{
							navigation.map(item => <li><a href={item.url} className={item.class}>{item.label}</a></li>)
						}
					</ul>
				</nav>
			</div>
		</header>
)}

export default Header; 