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
			order: '*',
			layout: ''
		}
	}

	changeLayout(e) {
		this.setState({layout: e.target.value});
	}
	
	changeOrder(e) {
		this.setState({order: e.target.value});
	}

	products() {
		let data = []
		const filtered = listing_data.filter(item => {
			/*
			let passed = Object.keys(curFilter).every(filter => {
				// con que algun item cumpla esta condicion aceptarlo
				return item.dataset[filter].split(",").some(current => {
					return curFilter[filter][current]
				})
			})
			*/
			
			return true//item.price === '5000'
		})
		
		// se junta todo en un array para ordenarlos
		filtered.map((item) => {
			data.push(item)
		})
		
		// ordenando elementos
		if (this.state.order === '+') {
			data.sort((b, a) => a.price.localeCompare(b.price))
		} else if (this.state.order === '-') {
			data.sort((a, b) => a.price.localeCompare(b.price))
		}
		
		return data.map((item, index) => <Product key={index} item={item}/>)
	}


	render() {
		return (
			<div>
				<div className="listing__controls">
					<div>{Object.keys(this.state.filter).length} {controls.count.label}</div>
					<form>
						<select data-target={id} className="listing__container--sort-selector" onChange={this.changeOrder.bind(this)} value={this.state.order}>
							{ controls.order.map(item => <option className={item.class} value={item.value}>{item.label}</option>) }
						</select>
						<select data-target={id} className="listing__container--layout-selector" onChange={this.changeLayout.bind(this)} value={this.state.layout}>
							{ controls.layout.map(item => <option className={item.class} value={item.value}>{item.label}</option>) }
						</select>
	
					</form>
				</div>
				<div>{this.state.order}</div>
				<ul className="listing__container" id={id} data-layout={this.state.layout}>
					{
						this.products()
					}
				</ul>
			</div>
		)
	}

}

export default Listing;
