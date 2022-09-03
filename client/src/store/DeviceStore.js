import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'холодильники'},
            {id: 2, name: 'телефоны'},
        ]
        this._brands = [
            {id: 1, name: 'apple'},
            {id: 2, name: 'samsung'},
        ]
        this._devices = [
            {id: 1, name: 'iphone', price: 25800, rating: 3, img: 'https://images.unsplash.com/photo-1662142935529-2cc58bc313f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'},
            {id: 2, name: 'iphone', price: 25800, rating: 3, img: 'https://images.unsplash.com/photo-1662142935529-2cc58bc313f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'},
            {id: 3, name: 'iphone', price: 25800, rating: 3, img: 'https://images.unsplash.com/photo-1662142935529-2cc58bc313f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }


    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}