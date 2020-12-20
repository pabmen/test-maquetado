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

		const curFilter = this.normalizedFilter(this.activeFilters)
		
		this.items.forEach(item => {
			let passed = Object.keys(curFilter).every(filter => {

				/*console.log('el filtro ---> ', filter)
				console.log('mis datos: ')
				console.log(item.dataset[filter].split(","))*/


				return item.dataset[filter].split(",").some(current => {
					//console.log(curFilter[filter][current] ? "activo" : "INACTIVO - saliendo.....")
					return curFilter[filter][current]
				})
			})
			/*console.log('-----------')
			console.log("El resultado", passed)*/

			passed ? item.classList.remove('hidden') : item.classList.add('hidden')


		})
	}

	// chequea si todos los filtros estan desactivados entonces es como si fueran todos activos y devuelve el filtro normalizado para esto
	normalizedFilter(originalFilter) {
		let normalizedFilter = JSON.parse(JSON.stringify(originalFilter))

		//console.clear()
		//console.log(originalFilter)
		Object.keys(normalizedFilter).forEach( level => {
			// chequeo si todos los filtros de la categoria estan desactivados
			let allDeactivated = Object.keys(normalizedFilter[level]).every( filter => {
				return !normalizedFilter[level][filter]
			})
			
			if (allDeactivated) {
				//console.log('all deactivated: ', allDeactivated)
				//console.log('------')
				
				
				Object.keys(normalizedFilter[level]).forEach( filter => {
					//console.log('level ', normalizedFilter[level])
					//console.log('filter ', filter)
					normalizedFilter[level][filter] = true
					//console.log(normalizedFilter[level][filter])
				})
			}
		})
		
		//console.log(normalizedFilter)
		return normalizedFilter
	}
}

export {ListviewFilter}
