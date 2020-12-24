import React from 'react';
import Data from '../data/locale_es.json';

import './Listing.scss';

function Listing() {
	const controls = Data.controls;
	const listing_data = Data.products;
	const id = 'listing-' + Math.floor(Math.random() * 1000000000);

	return (
		<div>
			<div className="listing__controls">
				<div><span id="listing-filter-count"></span> {controls.count.label}</div>
				<form>
					<select data-target={id} className="listing__container--sort-selector">
						{ controls.order.map(item => <option className={item.class} value={item.value}>{item.label}</option>) }
					</select>
	

				</form>
			</div>

			<ul className="listing__container" id={id}>
				{
					listing_data.map(item => 
						
						<li className="listing__container--item" data-price={item.price} data-category={item.category} data-size="" data-color="">
							<a className="listing__container--target" href={item.url}>
								<img className="listing__container--thumb" src={item.thumb} alt="" />
								<h2 className="listing__container--title">{item.title}</h2>
								<p className="listing__container--price">{item.price}</p>
							</a>
						</li>	
					)
				}
			</ul>
		</div>
)}

export default Listing;
