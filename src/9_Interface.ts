
// 1) Simple interface
interface Chai {
    flavour: string,
    price: number
}

const masalaChai: Chai = {
    flavour: "masala",
    price: 30
}


// 2) readOnly interface
interface Shop {
    readonly id: number
    name: string
}

const Bharat: Shop = {
    id: 1,
    name: "Bharat"
}

// Bharat.id = 5 // Not-allowed because it is readOnly


// 3) interface with function
interface DiscountCalculator{
    (price: number) : number
}

const apply50 : DiscountCalculator = (price) =>{
    return price * 0.5
}


// 3.2) 
interface TeaMachine {
    start() : void;
    stop() : void
}

const machine: TeaMachine = {
    start() {
        console.log("Start ")
    },

    stop(){
        console.log("Stop ")
    }
}



// 4) Index Signatures
interface ChaiRatings {
    [flavor: string] : number
}


const ratings: ChaiRatings = {
    masala : 20,
    ginger: 4.5
}


// 5) Interface merging concept
interface User {
    name: string
}

interface User {
    age : number
}

// We have to declare and assign both the properties i.e. name & age
const u1: User = {
    name : "Nazil Dhalwala", 
    age : 20
}


// ==> Interface can be extended 
interface A {
    a: string
}


interface B {
    b : string
}

interface C extends A, B {
    c : boolean
}


const abc1 : C = {
    a : "A",
    b: "2",
    c : true
}