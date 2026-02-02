type ChaiOrder = {
    type: string,
    sugar: number,
    strong: boolean
}

function makeChai(order : ChaiOrder) {
    console.log(order)
}

function serveChai(order : ChaiOrder) {
    console.log(order)
}

// It is good to define TYPE and use it, if it is occurring multiple times in code, to make our code readable


/*  */
type TeaRecipe = {
    water: number,
    milk: number
}


// We can implement "type" as well
class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

// ------------------------------

//  It is recommended that If you want to implement, then use "interface" !
interface CupSize {
    type: "small" | "large"
}



// This is known as LITERAL TYPE - Because we are assigning literals 🙃
// type CupSize = "small" | "large" // Error --> A class can only implement an object type or intersection of object types with statically known members.

class Chai implements CupSize {
    type : "small" |  "large" = "small";
}


/* type Response = {ok:true} | {ok:false}

class MyRes implements Response { // Same error --> Hence use Interface
    ok: boolean = true;
} */



/* InterSection */

type BaseChai = {teaLeaves: number}
type ExtraIngredients = {masala : number}

// intersection -->  Works like AND -- Both are required!
type MasalaChai2 = BaseChai & ExtraIngredients

const cup: MasalaChai2 = {
    teaLeaves: 2,
    masala : 1
}


type User = {
    username: string,
    bio?: string
}


const u1: User = {username: "Nazil"}
const u2: User = {username: "Nazil Dhalwala", bio: "Software Engg. at Tntra"}

type Config = {
    readonly appName: string,
    version : number
}

const cfg : Config = {
    appName: "MasterJi",
    version: 1
}

// cfg.appName = "Chai aur code"; // Cannot assign to 'appName' because it is a read-only property.
// We can assign only once, and not after that because it is readOnly