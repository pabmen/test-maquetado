/**
 * Sale View
 * @author Pablo Mendoza
 */


class ListviewGrid {
	constructor(context) {
		this.selector = context.querySelector('.listing__container--grid-selector')
		if (this.selector) {
			this.reset()
			this.bindings()
		}
	}

	reset() {
		this.selector.selectedIndex = 0
	}

	bindings() {
		this.selector.addEventListener('change', (e) => {
			e.preventDefault()
			
			const selectedValue = e.target.value
			if (selectedValue) {
				this.changeGrid(selectedValue)
			}
		})
	}

	changeGrid(size) {
		const target = document.querySelector(`#${this.selector.dataset.target}`)
		target.dataset.layout = size
	}
}

export {ListviewGrid}