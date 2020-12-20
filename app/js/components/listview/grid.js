/**
 * Grid Selector
 * @author Pablo Mendoza
 */


class ListviewGrid {
	constructor(context) {
		this.selector = context.querySelector('.listing__container--grid-selector')
		if (this.selector) {
			this.target = document.querySelector(`#${this.selector.dataset.target}`)
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
			} else {
				this.changeGrid('')
			}
		})
	}

	changeGrid(size) {
		this.target.dataset.layout = size
	}
}

export {ListviewGrid}