// 1) Normal Object
const Chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
}


// 2)
let book : {
    name: string;
    price: number;
    isColour: boolean
}

book = {
    name : "Thermo Dynamics",
    price: 825,
    isColour: true
}


// 3)
type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakChai: Tea = {
    name : "Adrak chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
}


// 4)
type Cup = {size: string}

let smallCup: Cup = {size : "200ml"}
let BigCup: Cup = {size : "500ml", material: "Steel"}

smallCup = BigCup // No errors here, because it (BigCup) is satisfying the bare minimum requirement of having the "size" property in it, other than the required property We may have other properties


// 5)
type Brew = {brewTime: number}
const coffe = {brewTime: 5, beans: "Arabica"}
const chaiBrew : Brew = coffe // Still not showing error because it is satisfying the bare minimum requirement of having the "brewTime" property in it


// 6)
type User = {
    username: string;
    password: string
}

const u1 : User = {
    username : "Nazil Dhalwala",
    password : "1234" 
}


// 7) This comes under best practice, Even if it (declaration) is of one line, This seperation creates clarity - And code clarity is very imp

type Item = {name: string, quantity: number}
type Address = {street: string, pin:number}

type Order = {
    id : string,
    items: Item[],
    address: Address
}



// 8) Partial<T>
type Chai = {
    name: string,
    price: number,
    isHot: boolean
}

const updateChai = (updates : Partial<Chai>) =>{
    console.log("Updating chai with ", updates)
}

// Now, becuase we have written "Partial", hence we don't to assign all the properties
updateChai({name:"Adrak Chai"})
updateChai({price:45})
updateChai({}) // But the problem is, Partial also allows EMPTY OBJECT ! so be aware of that



// 9) Required<T>
type ChaiOrder = {
    name? : string;
    quantity? : number
}

const placeOrder = (order: Required<ChaiOrder>) =>{
    console.log(`Placing an order : ${order}`)
}

// We have to assign all the properties, No matters whether it is optional (?) or not in declared type, But If we have coded "Required<T>", then we have to assign all... 
placeOrder({name: "Masala chai", quantity:2})



// 10) Pick<T,(properties)>

type DesiChai = {
    name: string,
    price: number,  
    isHot: boolean,
    ingredients: string[]
}

// In Pick we can select / pick the properties, that we want that, these should ne there in... (We can include as many we want)
type BasicChaiInfo = Pick<DesiChai, "name" | "price">
type BasicChaiInfo2 = Pick<DesiChai, "name">

const chaiOrder1 : BasicChaiInfo = {
    name: "Masala chai",
    price : 10
}

const chaiOrder2 : BasicChaiInfo2 = {
    name : "Adrak chai"
}



// 11) Omit<T,(properties)>
type ChaiNew = {
    name: string,
    price: number,  
    isHot: boolean,
    secretIngredients: string
}


// In Omit, It will omit the properties which you will specify here
type publicChai = Omit<ChaiNew, "secretIngredients">