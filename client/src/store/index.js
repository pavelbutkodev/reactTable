import { makeAutoObservable } from "mobx"

// Model the application state.
class Store {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.secondsPassed += 1
    }

    reset() {
        this.secondsPassed = 0
    }
}

const newStore = new Store()

export default newStore;