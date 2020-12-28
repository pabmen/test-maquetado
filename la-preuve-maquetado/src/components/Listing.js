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
			count: listing_data.length,
			filter: {
				'category': 'pantuflas'
			},
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

	// chequea si todos los filtros estan desactivados entonces es como si fueran todos activos y devuelve el filtro normalizado para esto
	normalizedFilter(originalFilter) {
		let normalizedFilter = JSON.parse(JSON.stringify(originalFilter))


		console.log(originalFilter)

		Object.keys(normalizedFilter).forEach( level => {

			console.log(level)
			// chequeo si todos los filtros de la categoria estan desactivados
			let allDeactivated = Object.keys(normalizedFilter[level]).every( filter => {
				return !normalizedFilter[level][filter]
			})
			
			if (allDeactivated) {
				// si estan todos desactivados los invierto y los pongo en true para mandarlo a la func filtro
				Object.keys(normalizedFilter[level]).forEach( filter => {
					normalizedFilter[level][filter] = true
				})
			}
		})
		
		return normalizedFilter
	}

	products() {
		const data = []
		const filtered = listing_data.filter(item => {
			/*
			let passed = Object.keys(curFilter).every(filter => {
				// con que algun item cumpla esta condicion aceptarlo
				return item.dataset[filter].split(",").some(current => {
					return curFilter[filter][current]
				})
			})
			*/
			
			return true
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

		/*this.setState({
			count: data.length
		})*/
		
		return data.map((item, index) => <Product key={index} item={item}/>)
	}


	render() {
		return (
			<div>
				<div className="listing__controls">
					<div>{this.state.count} {controls.count.label}</div>
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
