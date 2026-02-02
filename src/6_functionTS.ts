// 1)
function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type} chai`)
}
makeChai("Masala",2)


// 2)
const getChaiPrice = (): number =>{
    return 25
}

const logChai = () : void =>{
    console.log("Chai is ready...")
}


// 3) There are two ways to make parameter optional

// 3.1) using ? --> This is more recommended
/* const orderChai = (price: number, quantity: number, type?: string) =>{

} */

// 3.2) Assigning default value
const orderChai = (price: number, quantity: number, type: string = "Masala chai") =>{

}

// Note:- If you have multple parameters, the it is good practice to have optional parameters at last



// 4) Before learnign Ts, we were afraid of the follwing syntax 😂
function createChai(order:{
    type: string,
    sugar: number,
    size: "small" | "large"
}): number {
    return 4;
}