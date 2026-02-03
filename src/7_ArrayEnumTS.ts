// 1)
const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10,20]

const rating: Array<number> = [4,50,5.3]


// 2)
type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {name : "masala", price: 15},
    {name: "Adrak", price: 25}
]

// 3) readonly
const cities: readonly string[] = ['Delhi', "Jaipur"]
// cities.push("Vadodara") // Won't allow - As it is readonly


// 4) 2D arr
const table: number[][] = [
    [1,2,3,4],
    [5,6,7,8]
]



// 5) Tuples
let chaiTuple: [string, number]
chaiTuple = ["masala", 20]
// chaiTuple = [20, "Masala"] // will give error - because order matters
chaiTuple = ["Nazil",50]
console.log(chaiTuple)


let userInfo: [string, number, boolean?]

userInfo = ["hitesh",100]
userInfo = ["hitesh",200]
// userInfo = []
console.log(userInfo)



// readonly tuple
const location: readonly [number, number] = [78.66, 64.28]


// Named Tuple
const chaiItems: [name: string, price: number] = ["masala",25]


/* Problem with tuple */
const tup : [string, number] = ["Chai",10]
    // This is it, right?
    // But someone can also do following, whcih will create errors, AND you will have to debug 🤯
tup.push("exta")

console.log(tup)


// 6) ENUM
// It is just a standard practice to have enums in CAPS

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const size = CupSize.MEDIUM


enum Status {
    PENDING = 100,
    SERVED, // (Auto Increment ==>) 101
    CANCELLED // (Auto Increment ==>) 102
}

// console.log(Status) 


enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
}


const makeChai = (type: ChaiType) =>{
    console.log(`Making ${type} chai.`)
}

makeChai(ChaiType.GINGER)
// makeChai("masala") // Gives Error


/* 
!!! 
    It is good practice have homogeneous data types in enum, You can have multiple data types, But it is  not considered as standard pratice
!!! 
*/


// This is not good practice - as it is not homogeneous, Rather it is heterogeneous
enum randomEnum  {
    ID = 1,
    NAME = "Nazil",
}


/* Making ENUMS constant */
const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}