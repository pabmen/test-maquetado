import React from 'react';

class Product extends React.Component {
	render() {
		return (
			<li className="listing__container--item" data-price={this.props.item.price} data-category={this.props.item.category} data-size="" data-color="">
				<a className="listing__container--target" href={this.props.item.url}>
					<img className="listing__container--thumb" src={this.props.item.thumb} alt="" />
					<h2 className="listing__container--title">{this.props.item.title}</h2>
					<p className="listing__container--price">{this.props.item.price}</p>
				</a>
			</li>
		)
	}
}

export default Product;