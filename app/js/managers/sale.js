/**
 * Sale View
 * @author Pablo Mendoza
 */

import {
    DEBUG,
    HTML, LANG,
} from '../config/constants'

import {ListviewGrid} from '../components/listview/grid'
import {ListviewFilter} from '../components/listview/filter'

class SaleView {
	constructor(context) {
		this.context = context
		this.listingColumnChoser()
		this.sidebarFilters()
	}

	listingColumnChoser() {
		new ListviewGrid(this.context)
	}

	sidebarFilters() {
		const checkboxes = this.context.querySelectorAll('.sidebar__filter--checkbox')

		// in progress
		console.log(checkboxes)
	}
}

export {SaleView};