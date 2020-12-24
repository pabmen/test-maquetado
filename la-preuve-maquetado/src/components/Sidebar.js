import React from 'react';
import Data from '../data/locale_es.json';

import './Sidebar.scss';

function Sidebar() {
	const sidebar = Data.sidebar;

	return (
		<div className="sidebar">
			<p><strong className="text-xlarge">{sidebar.title}</strong></p>
			<hr/>
			<div className="sidebar__filter desktop-only">
				<form>
					<p className="text-large">{sidebar.filter_title}</p>
					{

						sidebar.filters.map((item) => {
							const id = 'filter-' + Math.floor(Math.random() * 1000000000);

							return (<div className="sidebar__filter--wrapper">
								<input type="checkbox" checked id={id} className="sidebar__filter--title-checkbox visually-hidden"/>
								<label for={id} className="sidebar__filter--title">{item.label}</label>
								<ul className="sidebar__filter--box">
									{
										item.values.map(value => {
											const id = 'filter-' + Math.floor(Math.random() * 1000000000);
											
											return (<li data-filter={value}>
												<input className="sidebar__filter--item visually-hidden" type="checkbox" value={value} data-type={item.type} id={id} />
												<label className="sidebar__filter--item--label" for={id}>{value}</label>
											</li>)
										})
									}
								</ul>
							</div>)
						})
					}
				</form>
			</div>
		</div>
)}

export default Sidebar;
