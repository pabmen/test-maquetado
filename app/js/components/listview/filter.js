/**
 * Grid Filter
 * @author Pablo Mendoza
 */

const DEFAULT_FILTER = {}
class ListviewFilter {
	constructor(context, options) {
		this.listView = context.querySelector('.listing__container')
		this.items = this.listView.querySelectorAll('.listing__container--item')
		this.controls = options.controls

		// filtros activos
		this.activeFilters = options.initialFilter || DEFAULT_FILTER

		this.bindings()
		this.filter()
	}

	bindings() {
		this.controls.forEach((control) => {
			control.addEventListener('click', () => {
				if (!this.activeFilters[control.dataset.type]) {
					this.activeFilters[control.dataset.type] = {}
				}
				this.activeFilters[control.dataset.type][control.value] = control.checked
				this.filter()
			})
		})
	}
	
	filter() {
		this.normalizedFilter(this.activeFilters)
		this.items.forEach((item, index) => {
			let passed = Object.keys(this.activeFilters).every(filter => {

				/*console.log('el filtro ---> ', filter)
				console.log('mis datos: ')
				console.log(item.dataset[filter].split(","))*/


				return item.dataset[filter].split(",").some(current => {
					//console.log(this.activeFilters[filter][current] ? "activo" : "INACTIVO - saliendo.....")
					return this.activeFilters[filter][current]
				})
			})
			/*console.log('-----------')
			console.log("El resultado", passed)*/

			passed ? item.classList.remove('hidden') : item.classList.add('hidden')


		})
	}

	// chequea si todos los filtros estan desactivados entonces es como si fueran todos activos y devuelve el filtro normalizado para esto
	normalizedFilter(filter) {
		let copiedFilter = {
			...filter
		}

		Object.keys(copiedFilter).forEach( level => {
			
			console.log(Object.keys(copiedFilter[level]).forEach( filter => {

				console.log(filter)
			}) )
		})
		//items.every(e => e.value === true)
	}
}

export {ListviewFilter}