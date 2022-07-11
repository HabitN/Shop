import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = [
            {id: 1, name:'Apple'},
            {id: 2, name:'Samsung'},
            {id: 3, name:'Lg'},
            {id: 4, name:'HP'},
            
            
        ]
        this._devices = [
            {id: 1, name:'12 pro', price:4999, rating:0, img:'a582f34f-0dee-4165-8b14-7cbf21e77549.jpg'},
            {id: 2, name:'GA-B419SMHL', price:1999, rating:0, img:'4dc9cc26-f032-4f48-ac6d-c66445366166.jpg'},
            {id: 5, name:'43UP76006LC', price:1705, rating:0, img:'06e0e6d9-0b16-47a1-b232-579882c6bb63.jpg'},
            {id: 7, name:'VICTUS 16-E0104UR', price:3399, rating:0, img:'a9c611c8-e491-4156-985c-f22f825150f5.jpg'},
            {id: 8, name:'43UP76006LC', price:1705, rating:0, img:'06e0e6d9-0b16-47a1-b232-579882c6bb63.jpg'},
            {id: 9, name:'VICTUS 16-E0104UR', price:3399, rating:0, img:'a9c611c8-e491-4156-985c-f22f825150f5.jpg'},
        
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
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
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

