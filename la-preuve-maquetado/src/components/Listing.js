import React from 'react';
import Product from './Product';
import Data from '../data/locale_es.json';

import './Listing.scss';

const controls = Data.controls;
const listing_data = Data.products;
const id = 'listing-' + Math.floor(Math.random() * 1000000000);

class Listing extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			filter: {},
			order: 'dasdas',
			layout: ''
		}
	}

	changeLayout(event) {
		this.setState({layout: event.target.value});
	}

	render() {
		return (
			<div>
				<div className="listing__controls">
					<div>{Object.keys(this.state.filter).length} {controls.count.label}</div>
					<form>
						<select data-target={id} className="listing__container--sort-selector" >
							{ controls.order.map(item => <option className={item.class} value={item.value}>{item.label}</option>) }
						</select>
						<select data-target={id} className="listing__container--layout-selector" onChange={this.changeLayout.bind(this)} value={this.state.layout}>
							{ controls.layout.map(item => <option className={item.class} value={item.value}>{item.label}</option>) }
						</select>
	
					</form>
				</div>
				<div>{this.state.order}</div>
				<ul className="listing__container" id={id} data-layout={this.state.layout}>
					{ listing_data.map(item => <Product item={item} filtered={true}/>) }
				</ul>
			</div>
		)
	}

}

export default Listing;
