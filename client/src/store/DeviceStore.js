import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'холодильники'},
            {id: 2, name: 'телефоны'},
            {id: 3, name: 'стиральные машины'},
            {id: 4, name: 'микроволновки'},
            {id: 5, name: 'ноутбуки'},
        ]
        this._brands = [
            {id: 1, name: 'apple'},
            {id: 2, name: 'samsung'},
            {id: 3, name: 'nike'},
            {id: 4, name: 'adidas'},
            {id: 5, name: 'lenovo'},

        ]
        this._devices = [
            {id: 1, brand: 'samsung', name: 'iphone', price: 25800, rating: 3, img: 'https://images.unsplash.com/photo-1662142935529-2cc58bc313f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'},
            {id: 2, brand: 'lenovo', name: 'lenova macbook', price: 25800, rating: 3, img: 'https://images.unsplash.com/photo-1662142935529-2cc58bc313f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'},
            {id: 3, brand: 'samsung', name: 'samsung jeans', price: 25800, rating: 3, img: 'https://images.unsplash.com/photo-1662142935529-2cc58bc313f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'},
            {id: 4, brand: 'apple', name: 'samsung jeans', price: 25800, rating: 3, img: 'https://images.unsplash.com/photo-1662142935529-2cc58bc313f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'},
            {id: 5, brand: 'lenovo', name: 'samsung jeans', price: 25800, rating: 3, img: 'https://images.unsplash.com/photo-1662142935529-2cc58bc313f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'},
            {id: 6, brand: 'samsung', name: 'samsung jeans', price: 25800, rating: 3, img: 'https://images.unsplash.com/photo-1662142935529-2cc58bc313f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'},
            {id: 7, brand: 'lenovo', name: 'samsung jeans', price: 25800, rating: 3, img: 'https://images.unsplash.com/photo-1662142935529-2cc58bc313f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'},
            {id: 8, brand: 'samsung', name: 'samsung jeans', price: 25800, rating: 3, img: 'https://images.unsplash.com/photo-1662142935529-2cc58bc313f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'},
            {id: 9, brand: 'lenovo', name: 'samsung jeans', price: 25800, rating: 3, img: 'https://images.unsplash.com/photo-1662142935529-2cc58bc313f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'},
            {id: 10, brand: 'apple', name: 'samsung jeans', price: 25800, rating: 3, img: 'https://images.unsplash.com/photo-1662142935529-2cc58bc313f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'},

        ]
        this._selectedType = {}
        this._selectedBrand = {}
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
    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
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
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}