import {makeAutoObservable} from "mobx"

// Model the application state.
class Store {
	tables = [
		{
			vehicle: "5",
			driver: "5",
			device: "5",
			location: "5",
			totalODO: "5",
			id: "0"
		},
		{
			vehicle: "5",
			driver: "5",
			device: "5",
			location: "5",
			totalODO: "5",
			id: "1"
		},
		{
			vehicle: "5",
			driver: "5",
			device: "5",
			location: "5",
			totalODO: "5",
			id: "2"
		},
	]

	isChange = false

	constructor() {
		makeAutoObservable(this)
	}

	delete(id) {
		this.id = id;
		this.tables = this.tables.filter(el => el.id !== id)
	}
}

const newStore = new Store()

export default newStore;